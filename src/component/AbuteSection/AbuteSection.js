import React, {Component} from 'react';
import data from '../../data.json';
import Fullpage from '../fullpage/Fullpage.js';

import './AbuteSection.css'
class AbuteSection extends Component {
    render() {
        return (
            <Fullpage className="secend">
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
        )
    }
}

export default AbuteSection;