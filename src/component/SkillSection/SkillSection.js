import React, {Component} from 'react';
import data from '../../data.json';
import Fullpage from '../fullpage/Fullpage.js';
import SkillCart from '../SkillCart/SkillCart';
import { Element } from "react-scroll";

import './SkillSection.css'
class SkillSection extends Component {
    render() {
        return (
            <Element name="skill" className="element">
                <Fullpage className="three" id="ThirdSection">
                    <h2>{data.section[1].title}</h2>
                    <div className="carts">
                    {
                        data.section[1].items.map(cart => {
                            return(
                                <SkillCart skill={cart} />
                            )
                        })
                    }
                    </div>
                </Fullpage>
            </Element>
        )
    }
}

export default SkillSection;