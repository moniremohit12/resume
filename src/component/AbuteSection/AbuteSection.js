import React, {Component} from 'react';
import data from '../../data.json';
import Fullpage from '../fullpage/Fullpage.js';
import { Element } from "react-scroll";

import './AbuteSection.css'
class AbuteSection extends Component {
    render() {
        return (
            <Element name="abute" className="element">
                <Fullpage className="secend" id="SecondSection">
                    <h2>{data.section[0].title}</h2>
                    <div className="text">
                    {
                        data.section[0].items.map(p => {
                            return(
                                <p key={"section"+p} >{p.content}</p>
                            )
                        })
                    }
                    </div>
                </Fullpage>
            </Element>
        )
    }
}

export default AbuteSection;