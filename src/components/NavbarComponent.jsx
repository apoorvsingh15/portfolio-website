import React, {PureComponent, Fragment} from 'react';
import { Navbar, Image, Nav, Button } from 'react-bootstrap';
import '../css/App.css';
export default class NavbarComponent extends PureComponent{
    render(){
        return(
            <Fragment>
                <Navbar>
                    <div>
                        <div><Image src={require('../assets/logo.jpg')} circle /></div>
                        <div><Button>Hire me on Upwork</Button></div>
                    </div>
                </Navbar>
            </Fragment>
        );
    }
}