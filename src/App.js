import React, {Component} from 'react';
import TitleAndIcons from './component/TitelAndIcons/TitleAndIcons';
import AbuteSection from './component/AbuteSection/AbuteSection';
import SkillSection from './component/SkillSection/SkillSection';
import Snow from './component/snowstrom';
import Navigation from './component/Navigation/Navigation';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="app">
        <Snow/>
        <Navigation/>
        <TitleAndIcons/>
        <AbuteSection/>
        <SkillSection/>
      </div>
    );
  }
}

export default App;
