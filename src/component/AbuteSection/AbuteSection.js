import React, {Component} from 'react';
import data from '../../data.json';
import Fullpage from '../fullpage/Fullpage.js';

// import { Link, Element } from 'react-scroll';

import './AbuteSection.css'
class AbuteSection extends Component {
    render() {
        return (
            <Fullpage className="secend">
                {/* <Link activeClass="active" to="me" spy={true} smooth={true} offset={50} duration={0} onSetActive={this.handleSetActive}>
                    downe
                </Link> */}
                <h2>{data.section[0].title}</h2>
                <div className="text">
                {
                    data.section[0].items.map(p => {
                        return(
                            <p key={"section"+p} >{p.content}</p>
                        )
                    })
                }
            {/* <Element name="me" className="element"/> */}

                </div>
            </Fullpage>
        )
    }
}

export default AbuteSection;