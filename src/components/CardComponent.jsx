import React, {PureComponent, Fragment} from 'react';
import {Image} from 'react-bootstrap'; 
export default class CardComponent extends PureComponent{
    render(){
        return(
            <Fragment>
                <div className='cardContent'>
                    {this.props.image}
                    <p>{this.props.title}</p>
                    <p>{this.props.about}</p>
                    <p>{this.props.heading}</p>
                    <p>{this.props.languages}</p>
                    {this.props.tools === 'Featured Blogs:' ?
                        <p className='blogger'>{this.props.tools}</p> 
                    : 
                        <p>{this.props.tools}</p>
                    }
                    <p>{this.props.toolName}</p>
                </div>
            </Fragment>
        );
    }
}