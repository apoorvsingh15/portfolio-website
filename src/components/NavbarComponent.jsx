import React, { PureComponent, Fragment } from "react";
import { Navbar, Image, Button } from "react-bootstrap";
import "../css/App.css";
export default class NavbarComponent extends PureComponent {
  render() {
    return (
      <Fragment>
        <Navbar>
          <div>
            <div>
              <Image src={require("../assets/logo.jpg")} circle />
            </div>
            <div>
              <a
                href={require("../assets/Apoorv__Singh_-_Software_Developer.pdf")}
                target="_blank"
              >
                <Button>Resume</Button>
              </a>
            </div>
          </div>
        </Navbar>
      </Fragment>
    );
  }
}
