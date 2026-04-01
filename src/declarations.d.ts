declare module 'react-typed' {
  import { Component } from 'react';

  interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    loopCount?: number;
    showCursor?: boolean;
    cursorChar?: string;
    onComplete?: (self: unknown) => void;
  }

  export default class Typed extends Component<TypedProps> {}
}
