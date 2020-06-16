import React, {Component} from 'react';
import './SkillCart.css'
class SkillCart extends Component {
    render() {
        const { skill } = this.props;
        return (
            <div className="item-cart">
                <img src={skill.content.src} alt={skill.content.alt}></img>
                <h5>{skill.content.title}</h5>
            </div> 
        )
    }
}

export default SkillCart;