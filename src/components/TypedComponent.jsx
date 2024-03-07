import React, { PureComponent, Fragment } from "react";
import Typed from "react-typed";
export default class TypedComponent extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className="typedDiv">
          <Typed
            strings={[
              "Hello! This is Apoorv Singh",
              "Front-end Web Developer ",
              "Specializing in React.js Framework",
              "React Native Developer",
              "Mobile Development - IOS, Android",
            ]}
            loop
            typeSpeed={25}
            backSpeed={40}
          />
          <p className="paraStyle">
            I design and code beautifully simple things, and I love what I do.
          </p>
        </div>
      </Fragment>
    );
  }
}
