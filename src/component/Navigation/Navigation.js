import React, {Component} from 'react';
import { Link } from "react-scroll";

import './Navigation.css';

class Navigation extends Component {

    state = {
        wandcolor: "white",
        colorChanged: false,
        homecolor: "black",
        aboutcolor: "black",
        skillcolor: "black",
    };

    ChangeColor = () => {
        this.setState({
            wandcolor: this.state.wandcolor === "white" ? "red" : "white",
        });
    };

    ChangeBgColor = () => {
        if (this.state.colorChanged == false) {
          document.getElementById("FirstSection").style.backgroundColor =
            "rgb(" +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            ")";
          document.getElementById("SecondSection").style.backgroundColor =
            "rgb(" +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            ")";
          document.getElementById("ThirdSection").style.backgroundColor =
            "rgb(" +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            ")";
          this.setState({
            colorChanged: true,
          });
        } else {
          document.getElementById("FirstSection").style.backgroundColor =
            "rgb(131, 197, 197)";
          document.getElementById("SecondSection").style.backgroundColor =
            "lightgrey";
          document.getElementById("ThirdSection").style.backgroundColor =
            "burlywood";
          this.setState({
            colorChanged: false,
          });
        }
    };
    

    render() {
        return (
            <div className="navigation" id="navigation">
                <ul className="menu">
                    <li className="menu-item" id="me"
                    style={{
                        color: this.state.wandcolor,
                    }}
                    onMouseOver={() => {
                        this.ChangeColor();
                    }}
                    onMouseOut={() => {
                        this.ChangeColor();
                    }}
                    onClick={() => {
                        this.ChangeBgColor();
                        this.ChangeColor();
                    }}
                    >
                        me
                    </li>
                    <div className="links">
                        <li className="menu-item"
                            style={{
                                color: this.state.homecolor,
                            }}
                            onMouseOver={() => {
                            this.setState({
                                homecolor: this.state.homecolor === "black" ? "white" : "black",
                            });
                            }}
                            onMouseOut={() => {
                            this.setState({
                                homecolor: this.state.homecolor === "black" ? "white" : "black",
                            });
                            }} 
                        >
                            <Link
                                activeClass="active"
                                to="title"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                onSetActive={this.handleSetActive}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="menu-item"
                            style={{
                                color: this.state.aboutcolor,
                            }}
                            onMouseOver={() => {
                            this.setState({
                                aboutcolor:
                                this.state.aboutcolor === "black" ? "white" : "black",
                            });
                            }}
                            onMouseOut={() => {
                            this.setState({
                                aboutcolor:
                                this.state.aboutcolor === "black" ? "white" : "black",
                            });
                            }}
                        >
                            <Link
                                activeClass="active"
                                to="abute"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                onSetActive={this.handleSetActive}
                                >
                                about
                            </Link>
                            
                        </li>
                        <li className="menu-item"
                            style={{
                            color: this.state.skillcolor,
                            }}
                            onMouseOver={() => {
                            this.setState({
                                skillcolor:
                                this.state.skillcolor === "black" ? "white" : "black",
                            });
                            }}
                            onMouseOut={() => {
                            this.setState({
                                skillcolor:
                                this.state.skillcolor === "black" ? "white" : "black",
                            });
                            }}
                        >
                            <Link
                                activeClass="active"
                                to="skill"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                onSetActive={this.handleSetActive}
                            >
                                skill

                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Navigation;