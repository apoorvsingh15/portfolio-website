import React, {PureComponent, Fragment} from 'react';
import { Navbar, Image, Nav, Button } from 'react-bootstrap';
import location from 'react';
import '../css/App.css';
export default class NavbarComponent extends PureComponent{
    render(){
        return(
            <Fragment>
                <Navbar>
                    <div>
                        <div><Image src={require('../assets/logo.jpg')} circle /></div>
                        <div>
                            <a href='https://www.upwork.com/freelancers/~01e5c51c05c21ee63b'>
                                <Button>Upwork</Button>
                            </a>
                        </div>
                    </div>
                </Navbar>
            </Fragment>
        );
    }
}