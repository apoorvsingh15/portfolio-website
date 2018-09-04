import React, {PureComponent, Fragment} from 'react';
import NavbarComponent from '../components/NavbarComponent';
import TypedComponent from '../components/TypedComponent';
import ImageComponent from '../components/ImageComponent';
import About from '../components/About';
import CardComponent from '../components/CardComponent';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';
export default class Main extends PureComponent{
    render(){
        return(
            <Fragment>
                <NavbarComponent />
                <TypedComponent />
                <ImageComponent />
                <About />
                <Grid>
                    <Row>
                        <Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <CardComponent />
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <CardComponent />
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <CardComponent />
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </Fragment>
        );
    }
}