import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import data from '../../data.json';
import Fullpage from '../fullpage/Fullpage.js';
import { Link, Element } from 'react-scroll';
import Downicon from '../Downicon/Downicon';

import './TitleAndIcons.css';

class TitleAndIcons extends Component {
    render() {
        return (
            <div>
                <Fullpage className="first">
                    <h1>{data.title}</h1>
                    <h2>{data.subtitle}</h2>
                    <div>
                    {
                        Object.keys(data.links).map(icon => {
                            return(
                                <SocialIcon key={"icon" + icon} className="icons" url={data.links[icon]}/>
                            )                        
                        })
                    }
                    </div>
                </Fullpage>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={0} onSetActive={this.handleSetActive}>
                <Downicon
                    icons={data.icons.down}
                />
                </Link>
                <Element name="about" className="element"/>
            </div>
        )
    }
}

export default TitleAndIcons;