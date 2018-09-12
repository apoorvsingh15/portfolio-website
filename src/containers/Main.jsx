import React, {PureComponent, Fragment} from 'react';
import {Image, Carousel} from 'react-bootstrap';
import Slider from "react-slick";
import CountUp from 'react-countup';
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
    constructor(props){
        super(props);
        this.state = {
            enableCounter : false
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if(window.pageYOffset >= 2000){
           this.setState({
               enableCounter : true
           })
        }
    }
    
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
        return(
            <Fragment>
                <NavbarComponent />
                <TypedComponent />
                <ImageComponent />
                <About />
                <Grid>
                    <Row className='rowMargin'>
                        <Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <CardComponent 
                                    image={<Image src={require('../assets/frontend-dev.svg')}/>} 
                                    title={'Front-end Developer'}
                                    about={'Front-end developer specializing in react.js framework, I work to turn ideas into reality.'}
                                    heading={'Languages I speak:'}
                                    languages={'HTML5, CSS3, Javascript, React.js, React Native, Node.js, Java & C'}
                                    tools={'Dev Tools:'}
                                    toolName={'BitBucket, Bootstrap, CodePen, Github, Gitlab, Material-ui, StackOverflow, Terminal, VS Code'}
                                />
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <CardComponent
                                    image={<Image src={require('../assets/mobile-dev.svg')}/>}
                                    title={'Mobile Developer'}
                                    about={'Mobile development - IOS & Android, in React Native, Cross-platform app development.'}
                                    heading={'Mobile Design:'}
                                    languages={'React Native, Flexbox, Cross-platform app development- IOS & Android'}
                                    tools={'Dev Tools:'}
                                    toolName={'Android Studio, Expo, VS Code, XCode, Trello, Slack'}
                                />
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <CardComponent 
                                    image={<Image src={require('../assets/blogger-dev.svg')}/>}
                                    title={'Blogger'}
                                    about={'A budding blogger. Mainly like to write about life and javascript because I find them similar.'}
                                    heading={'My Blogs:'}
                                    languages={'Medium, Blogger'}
                                    tools={'Featured Blogs:'}
                                    toolName={'Destination Lost in the journey, Hoisting in Javascript'}
                                />
                            </Col>
                        </Col>
                    </Row>
                    <div>
                        <h2 className='centeredText'>Statistics</h2>
                        <p className='workClass'>Work I have accomplished</p>
                    </div>
                    <Col>
                        <Row className='counterBox'>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className='insideBox'>
                                    <p>Projects</p>
                                    {this.state.enableCounter === true ?
                                    <p><CountUp end={10} duration={5} /><span>+</span></p>:
                                    <p>10+</p>    
                                }
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className='insideBox'>
                                    <p>Lines of Code</p>
                                    {this.state.enableCounter === true ?
                                    <p><CountUp end={15000} duration={5} /><span>+</span></p>:
                                    <p>15000+</p>    
                                }
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className='insideBox'>
                                    <p>Cups of Coffee</p>
                                    {this.state.enableCounter === true ?
                                    <p><CountUp end={1000} duration={5} /><span>+</span></p>:
                                    <p>1000+</p>    
                                }
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <div>
                        <h2 className='centeredText'>Checkout My Blogs</h2>
                    </div>
                    <Col>
                        <Row>
                            <Col md={6} sm={12} xs={12} lg={6}>
                                <a href='https://medium.com/@apoorv.singh15' target='_blank'><Image className='blogImage' src={require('../assets/medium-logo-lg.jpeg')} /></a>
                            </Col>
                            <Col md={6} sm={12} xs={12} lg={6}>
                                <a href='https://lifeandreact.blogspot.com/' target='_blank'><Image className='blogImage' src={require('../assets/blogger.jpg')} /></a>
                            </Col>
                        </Row>
                    </Col>
                    <div>
                        <h2 className='centeredText'>Testimonials</h2>
                    </div>
                    <Col sm={12} xs={12} md={12} lg={12}>   
                        <Slider {...settings}>
                            <div className='sliderSettings'>
                                <Image className='roundedImage' rounded src={require('../assets/kanchan.jpeg')} />
                                <p className='centeredText'>"Apoorv has the capacity to think of best solutions rather than going the brute force way. He has shown a knack for learning new technologies very quickly. I see him working as a full stack developer very soon in near future."</p>
                                <p className='centeredTextImg'>Kanchan</p>
                                <p className='centeredTextImg'>Software Engineer</p>
                                <p className='centeredTextImg'>HSBC Private Banking</p>
                            </div>
                            <div className='sliderSettings'>
                                <Image className='roundedImage' rounded src={require('../assets/sarthak.jpeg')} />
                                <p className='centeredText'>"I worked with Apoorv for our college project. I was always in awe with his creativity and hardworking nature. As a team member or a leader, Apoorv earns my highest recommendation."</p>
                                <p className='centeredTextImg'>Sarthak Negi</p>
                                <p className='centeredTextImg'>System Engineer</p>
                                <p className='centeredTextImg'>Infosys</p>
                            </div>
                            <div className='sliderSettings'>
                                <Image className='roundedImage' rounded src={require('../assets/manojNegi.jpg')} />
                                <p className='centeredText'>"A self-learner, pleasant and dynamic personality. He has a keen sense of perfection and knows what he wants to achieve with that."</p>
                                <p className='centeredTextImg'>Manoj Singh Negi</p>
                                <p className='centeredTextImg'>Senior Javascript Developer</p>
                                <p className='centeredTextImg'>ZestGeek Solutions Pvt Ltd</p>
                            </div>
                        </Slider>
                    </Col>
                </Grid>
                <div className='aboutDiv upSpace'>
                    <Image className='roundedImageFooter' src={require('../assets/logo.jpg')} />
                    <p className='centeredText'>Living, learning, & leveling up one day at a time.</p>
                    <div className='socialIcons'>
                        <a href='https://www.linkedin.com/in/apoorv-singh-07943622/' className='textDecorateIcons'><i className="fab fa-linkedin iconSize"></i></a>
                        <a href='https://www.facebook.com/apoorv.singh.16' className='textDecorateIcons'><i className="fab fa-facebook iconSize"></i></a>
                        <a href='https://github.com/apoorvsingh15' className='textDecorateIcons'><i className="fab fa-github-alt iconSize"></i></a>
                        <a href='https://twitter.com/apoorv_singh15' className='textDecorateIcons'><i className="fab fa-twitter-square iconSize"></i></a>
                    </div>
                    <p className='textFooter'>Handcrafted by me &copy; 2018</p>
                    <p className='textFooter'>Made with <span><a href='https://reactjs.org/' className='textDecorateIcons'>React</a></span></p>
                </div>
            </Fragment>
        );
    }
}