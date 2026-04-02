import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../css/App.css';

type Dir = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Point = { x: number; y: number };

const COLS = 20;
const ROWS = 20;
const TICK_MS = 120;

function randomFood(snake: Point[]): Point {
  let pos: Point;
  do {
    pos = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
  } while (snake.some(s => s.x === pos.x && s.y === pos.y));
  return pos;
}

export default function MiniGame(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [bestScore, setBestScore] = useState<number>(0);

  // Game state stored in refs to avoid stale closures in the tick loop
  const snakeRef = useRef<Point[]>([{ x: 10, y: 10 }]);
  const foodRef = useRef<Point>(randomFood(snakeRef.current));
  const dirRef = useRef<Dir>('RIGHT');
  const nextDirRef = useRef<Dir>('RIGHT');
  const scoreRef = useRef<number>(0);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Drawing ──────────────────────────────────────────────
  const draw = useCallback((): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cw = W / COLS;
    const ch = H / ROWS;

    // Background
    ctx.fillStyle = '#030310';
    ctx.fillRect(0, 0, W, H);

    // Grid (subtle)
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= COLS; i++) {
      ctx.beginPath(); ctx.moveTo(i * cw, 0); ctx.lineTo(i * cw, H); ctx.stroke();
    }
    for (let j = 0; j <= ROWS; j++) {
      ctx.beginPath(); ctx.moveTo(0, j * ch); ctx.lineTo(W, j * ch); ctx.stroke();
    }

    // Food — glowing dot
    const food = foodRef.current;
    const fx = food.x * cw + cw / 2;
    const fy = food.y * ch + ch / 2;
    const foodGrd = ctx.createRadialGradient(fx, fy, 0, fx, fy, cw * 0.7);
    foodGrd.addColorStop(0, 'rgba(103, 232, 249, 0.9)');
    foodGrd.addColorStop(0.4, 'rgba(6, 182, 212, 0.6)');
    foodGrd.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(fx, fy, cw * 0.7, 0, Math.PI * 2);
    ctx.fillStyle = foodGrd;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(fx, fy, cw * 0.28, 0, Math.PI * 2);
    ctx.fillStyle = '#67e8f9';
    ctx.fill();

    // Snake
    const snake = snakeRef.current;
    snake.forEach((seg, i) => {
      const ratio = i / snake.length;
      const r = Math.round(124 + ratio * (167 - 124));
      const g = Math.round(58  + ratio * (139 - 58));
      const b = Math.round(237 + ratio * (250 - 237));
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
      ctx.shadowBlur = i === 0 ? 12 : 4;
      const pad = 1.5;
      const rx = seg.x * cw + pad;
      const ry = seg.y * ch + pad;
      const rw = cw - pad * 2;
      const rh = ch - pad * 2;
      const radius = 3;
      ctx.beginPath();
      ctx.moveTo(rx + radius, ry);
      ctx.lineTo(rx + rw - radius, ry);
      ctx.arcTo(rx + rw, ry, rx + rw, ry + radius, radius);
      ctx.lineTo(rx + rw, ry + rh - radius);
      ctx.arcTo(rx + rw, ry + rh, rx + rw - radius, ry + rh, radius);
      ctx.lineTo(rx + radius, ry + rh);
      ctx.arcTo(rx, ry + rh, rx, ry + rh - radius, radius);
      ctx.lineTo(rx, ry + radius);
      ctx.arcTo(rx, ry, rx + radius, ry, radius);
      ctx.closePath();
      ctx.fill();
    });
    ctx.shadowBlur = 0;

    // Head eyes
    const head = snake[0];
    const eyeSize = cw * 0.12;
    ctx.fillStyle = '#030310';
    const eyeOffset: Record<Dir, [number, number, number, number]> = {
      RIGHT: [cw * 0.65, ch * 0.3, cw * 0.65, ch * 0.7],
      LEFT:  [cw * 0.35, ch * 0.3, cw * 0.35, ch * 0.7],
      UP:    [cw * 0.3, ch * 0.35, cw * 0.7, ch * 0.35],
      DOWN:  [cw * 0.3, ch * 0.65, cw * 0.7, ch * 0.65],
    };
    const [e1x, e1y, e2x, e2y] = eyeOffset[dirRef.current];
    ctx.beginPath();
    ctx.arc(head.x * cw + e1x, head.y * ch + e1y, eyeSize, 0, Math.PI * 2);
    ctx.arc(head.x * cw + e2x, head.y * ch + e2y, eyeSize, 0, Math.PI * 2);
    ctx.fill();

    // Game over overlay
    if (gameOver) {
      ctx.fillStyle = 'rgba(3,3,16,0.75)';
      ctx.fillRect(0, 0, W, H);
      ctx.font = `bold ${Math.round(cw * 1.1)}px Syne, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#a78bfa';
      ctx.fillText('GAME OVER', W / 2, H / 2 - ch);
      ctx.font = `${Math.round(cw * 0.75)}px Plus Jakarta Sans, sans-serif`;
      ctx.fillStyle = '#67e8f9';
      ctx.fillText(`Score: ${scoreRef.current}`, W / 2, H / 2 + ch * 0.2);
      ctx.font = `${Math.round(cw * 0.6)}px Plus Jakarta Sans, sans-serif`;
      ctx.fillStyle = '#9898b8';
      ctx.fillText('Tap ▶ to restart', W / 2, H / 2 + ch * 1.6);
    }

    // Start overlay
    if (!running && !gameOver) {
      ctx.fillStyle = 'rgba(3,3,16,0.6)';
      ctx.fillRect(0, 0, W, H);
      ctx.font = `bold ${Math.round(cw * 0.85)}px Syne, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#a78bfa';
      ctx.fillText('SNAKE', W / 2, H / 2 - ch);
      ctx.font = `${Math.round(cw * 0.6)}px Plus Jakarta Sans, sans-serif`;
      ctx.fillStyle = '#67e8f9';
      ctx.fillText('Tap ▶ to play', W / 2, H / 2 + ch * 0.6);
    }
  }, [running, gameOver]);

  // ── Game tick ──────────────────────────────────────────────
  const tick = useCallback((): void => {
    dirRef.current = nextDirRef.current;
    const snake = snakeRef.current;
    const head = snake[0];
    const dir = dirRef.current;

    const next: Point = {
      x: head.x + (dir === 'RIGHT' ? 1 : dir === 'LEFT' ? -1 : 0),
      y: head.y + (dir === 'DOWN'  ? 1 : dir === 'UP'   ? -1 : 0),
    };

    // Wall collision
    if (next.x < 0 || next.x >= COLS || next.y < 0 || next.y >= ROWS) {
      endGame(); return;
    }
    // Self collision (skip tail tip since it will move)
    if (snake.slice(0, -1).some(s => s.x === next.x && s.y === next.y)) {
      endGame(); return;
    }

    const newSnake = [next, ...snake];
    if (next.x === foodRef.current.x && next.y === foodRef.current.y) {
      // Eat food
      scoreRef.current += 1;
      setScore(scoreRef.current);
      foodRef.current = randomFood(newSnake);
    } else {
      newSnake.pop();
    }
    snakeRef.current = newSnake;
    draw();
  }, [draw]);

  function endGame(): void {
    if (tickRef.current) clearInterval(tickRef.current);
    setRunning(false);
    setGameOver(true);
    setBestScore(prev => Math.max(prev, scoreRef.current));
  }

  function startGame(): void {
    snakeRef.current = [{ x: 10, y: 10 }];
    dirRef.current = 'RIGHT';
    nextDirRef.current = 'RIGHT';
    foodRef.current = randomFood(snakeRef.current);
    scoreRef.current = 0;
    setScore(0);
    setGameOver(false);
    setRunning(true);
  }

  // Start interval when running
  useEffect(() => {
    if (!running) return;
    tickRef.current = setInterval(tick, TICK_MS);
    return () => { if (tickRef.current) clearInterval(tickRef.current); };
  }, [running, tick]);

  // Draw whenever state changes
  useEffect(() => {
    draw();
  }, [draw, score, running, gameOver]);

  // ── Keyboard input ─────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      const map: Record<string, Dir> = {
        ArrowUp: 'UP', w: 'UP', W: 'UP',
        ArrowDown: 'DOWN', s: 'DOWN', S: 'DOWN',
        ArrowLeft: 'LEFT', a: 'LEFT', A: 'LEFT',
        ArrowRight: 'RIGHT', d: 'RIGHT', D: 'RIGHT',
      };
      const newDir = map[e.key];
      if (!newDir) return;
      const opposite: Record<Dir, Dir> = { UP: 'DOWN', DOWN: 'UP', LEFT: 'RIGHT', RIGHT: 'LEFT' };
      if (newDir !== opposite[dirRef.current]) {
        nextDirRef.current = newDir;
      }
      // Prevent page scroll with arrow keys when game is focused
      if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // ── D-pad handler ──────────────────────────────────────────
  const handleDpad = useCallback((dir: Dir): void => {
    const opposite: Record<Dir, Dir> = { UP: 'DOWN', DOWN: 'UP', LEFT: 'RIGHT', RIGHT: 'LEFT' };
    if (dir !== opposite[dirRef.current]) {
      nextDirRef.current = dir;
    }
  }, []);

  return (
    <div className="ios-phone">
      <div className="ios-btn-silent" />
      <div className="ios-btn-volume-up" />
      <div className="ios-btn-volume-down" />
      <div className="ios-btn-power" />
      <div className="phone-screen">
        {/* App header */}
        <div className="phone-header">
          <span className="phone-header-title">🐍 Snake</span>
          <span className="phone-score">
            {bestScore > 0 ? `Best: ${bestScore}  ` : ''}
            Score: {score}
          </span>
        </div>

        {/* Game canvas */}
        <canvas
          ref={canvasRef}
          className="snake-canvas"
          width={266}
          height={266}
        />

        {/* D-pad */}
        <div className="dpad-overlay">
          <div className="dpad-row">
            <div style={{ width: 44, height: 44 }} />
            <button className="dpad-btn" onPointerDown={() => handleDpad('UP')}>▲</button>
            <div style={{ width: 44, height: 44 }} />
          </div>
          <div className="dpad-row">
            <button className="dpad-btn" onPointerDown={() => handleDpad('LEFT')}>◀</button>
            <button
              className="dpad-center"
              onPointerDown={() => { if (!running) startGame(); }}
            >
              {running ? '▶' : gameOver ? '↺' : '▶'}
            </button>
            <button className="dpad-btn" onPointerDown={() => handleDpad('RIGHT')}>▶</button>
          </div>
          <div className="dpad-row">
            <div style={{ width: 44, height: 44 }} />
            <button className="dpad-btn" onPointerDown={() => handleDpad('DOWN')}>▼</button>
            <div style={{ width: 44, height: 44 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
