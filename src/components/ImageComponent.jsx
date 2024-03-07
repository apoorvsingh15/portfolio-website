import React, { PureComponent, Fragment } from "react";
import { Image } from "react-bootstrap";
export default class ImageComponent extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className="imageDiv">
          {/* <Image src={require('../assets/background.png')} /> */}
          <Image
            style={{ height: 350, width: "auto" }}
            src={require("../assets/avatar.png")}
          />
          {/* <Image src={require('../assets/work.png')} /> */}
        </div>
      </Fragment>
    );
  }
}
