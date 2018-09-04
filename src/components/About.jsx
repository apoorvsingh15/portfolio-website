import React, { PureComponent, Fragment} from 'react';

export default class About extends PureComponent{
    render(){
        return(
            <Fragment>
                <div className='aboutDiv'>
                    <h3>Hi, I am Apoorv. Nice to meet you.</h3>
                    <p>A young developer from Lucknow, India, who loves to design and code.</p>
                    <p>I like to create digital magic in the form of interactive and  </p>
                    <p>responsive web pages and work on full time as well </p>
                    <p>as part time projects.</p>
                </div>
            </Fragment>
        );
    }
}