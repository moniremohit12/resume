import React from 'react';
import TitleAndIcons from './component/TitelAndIcons/TitleAndIcons';
import AbuteSection from './component/AbuteSection/AbuteSection';
import SkillSection from './component/SkillSection/SkillSection';

// import * as Scroll from 'react-scroll';

import { Link, Element } from 'react-scroll';
// import Downicon from './component/Downicon/Downicon';

import './App.css';

function App() {
  return (
    <div className="app">
        <div className="navigation">
          <ul className="menu">
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={0} onSetActive={this.handleSetActive}>

              <li className="menu-item">about</li>
            </Link>
              <li className="menu-item">skill</li>
            
          </ul>
        </div>
        <TitleAndIcons />
        <AbuteSection/>
        <SkillSection/>
        <Element name="about" className="element"/>
    </div>
  );
}

export default App;
