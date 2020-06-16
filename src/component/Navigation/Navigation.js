import React, {Component} from 'react';

import './Navigation.css';

class Navigation extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         flag: 'true'
    //     };
    //     this.click = this.click.bind(this);
    // }

    click() {
        // this.setState({
        //     flag: this.state.flag === 'true'? 'fals' : 'true'
        // })
        console.log('monire');
    }
    render() {
        return (
            <div className="navigation">
                <ul className="menu">
                    <li className="menu-item"
                        onClick="console.log('The link was clicked.');"
                    >me</li>
                    <div className="links">
                        <li className="menu-item">about</li>
                        <li className="menu-item">skill</li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Navigation;