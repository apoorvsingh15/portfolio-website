import React, { PureComponent, Fragment } from "react";
import { Image } from "react-bootstrap";
// import Slider from "react-slick";
import CountUp from "react-countup";
import NavbarComponent from "../components/NavbarComponent";
import TypedComponent from "../components/TypedComponent";
// import ImageComponent from '../components/ImageComponent';
import About from "../components/About";
import CardComponent from "../components/CardComponent";
import { Grid, Row, Col } from "react-bootstrap";
import ImageComponent from "../components/ImageComponent";
export default class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      enableCounter: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = () => {
    if (window.scrollY >= 1100) {
      this.setState({
        enableCounter: true,
      });
    }
  };

  render() {
    return (
      <Fragment>
        <NavbarComponent />
        <TypedComponent />
        <ImageComponent />
        <About />
        <Grid>
          <Row className="rowMargin">
            <Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <CardComponent
                  image={<Image src={require("../assets/frontend-dev.svg")} />}
                  title={"Front-end Developer"}
                  about={
                    "Front-end developer specializing in react.js framework, I work to turn ideas into reality."
                  }
                  heading={"Languages I speak:"}
                  languages={
                    "HTML5, CSS3, Javascript, React.js, React Native, Node.js, Java & C"
                  }
                  tools={"Dev Tools:"}
                  toolName={
                    "BitBucket, Bootstrap, CodePen, Github, Gitlab, Material-ui, StackOverflow, Terminal, VS Code"
                  }
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <CardComponent
                  image={<Image src={require("../assets/mobile-dev.svg")} />}
                  title={"Mobile Developer"}
                  about={
                    "Mobile development - IOS & Android, in React Native, Cross-platform app development."
                  }
                  heading={"Mobile Design:"}
                  languages={
                    "React Native, Flexbox, Cross-platform app development- IOS & Android"
                  }
                  tools={"Dev Tools:"}
                  toolName={
                    "Android Studio, Expo, VS Code, XCode, Trello, Slack"
                  }
                />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <CardComponent
                  image={<Image src={require("../assets/blogger-dev.svg")} />}
                  title={"Blogger"}
                  about={
                    "A budding blogger. Mainly like to write about life and javascript because I find them similar."
                  }
                  heading={"My Blogs:"}
                  languages={"Medium, Blogger"}
                  tools={"Featured Blogs:"}
                  toolName={
                    "Destination Lost in the journey, Hoisting in Javascript"
                  }
                />
              </Col>
            </Col>
          </Row>
          <div>
            <h2 className="centeredText">Statistics</h2>
            <p className="workClass">Work I have accomplished</p>
          </div>
          <Col>
            <Row className="counterBox">
              <Col xs={12} sm={12} md={4} lg={4}>
                <div className="insideBox">
                  <p>Projects</p>
                  {this.state.enableCounter === true ? (
                    <p>
                      <CountUp end={25} duration={10} />
                      <span>+</span>
                    </p>
                  ) : (
                    <div></div>
                  )}
                </div>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <div className="insideBox">
                  <p>Lines of Code</p>
                  {this.state.enableCounter === true ? (
                    <p>
                      <CountUp end={35000} duration={10} />
                      <span>+</span>
                    </p>
                  ) : (
                    <p></p>
                  )}
                </div>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <div className="insideBox">
                  <p>Cups of Coffee</p>
                  {this.state.enableCounter === true ? (
                    <p>
                      <CountUp end={30000} duration={10} />
                      <span>+</span>
                    </p>
                  ) : (
                    <p></p>
                  )}
                </div>
              </Col>
            </Row>
          </Col>
          <div>
            <h2 className="centeredText">Checkout My Blogs</h2>
          </div>
          <Col>
            <Row>
              <Col md={6} sm={12} xs={12} lg={6}>
                <a
                  href="https://medium.com/@apoorv.singh15"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="blogImage"
                    src={require("../assets/medium-logo-lg.jpeg")}
                  />
                </a>
              </Col>
              <Col md={6} sm={12} xs={12} lg={6}>
                <a
                  href="https://lifeandreact.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="blogImage"
                    src={require("../assets/blogger.jpg")}
                  />
                </a>
              </Col>
            </Row>
          </Col>
        </Grid>
        <div className="aboutDiv upSpace">
          <Image
            className="roundedImageFooter"
            src={require("../assets/logo.jpg")}
          />
          <p className="centeredText">
            Living, learning, & leveling up one day at a time.
          </p>
          <div className="socialIcons">
            <a
              href="https://www.linkedin.com/in/apoorv-singh-07943622/"
              className="textDecorateIcons"
            >
              <i className="fab fa-linkedin iconSize"></i>
            </a>
            <a
              href="https://www.facebook.com/apoorv.singh.16"
              className="textDecorateIcons"
            >
              <i className="fab fa-facebook iconSize"></i>
            </a>
            <a
              href="https://github.com/apoorvsingh15"
              className="textDecorateIcons"
            >
              <i className="fab fa-github-alt iconSize"></i>
            </a>
            <a
              href="https://twitter.com/apoorv_singh15"
              className="textDecorateIcons"
            >
              <i className="fab fa-twitter-square iconSize"></i>
            </a>
          </div>
          <p className="textFooter">Handcrafted by me &copy; 2024</p>
          <p className="textFooter">
            Made with{" "}
            <span>
              <a href="https://reactjs.org/" className="textDecorateIcons">
                React
              </a>
            </span>
          </p>
        </div>
      </Fragment>
    );
  }
}
