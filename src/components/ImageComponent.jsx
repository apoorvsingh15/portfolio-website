import React, { PureComponent, Fragment} from 'react';
import { Image } from 'react-bootstrap';
export default class ImageComponent extends PureComponent{
    render(){
        return(
            <Fragment>
                <div className='imageDiv'>
                    <Image src={require('../assets/background.png')} />
                    <Image src={require('../assets/avatar.png')} />
                    <Image src={require('../assets/work.png')} />
                </div>
            </Fragment>
        );
    }
}