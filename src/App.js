import React, { Component } from "react";

import TitleSection from "./sections/TitleSection.js";
import AboutSection from "./sections/AboutSection.js";
import SkillSection from "./sections/SkillSection.js";
import Navbar from "./components/Navbar.js";
import SnowStorm from "react-snowstorm";
import data from "./data.json";
import {  Element } from "react-scroll";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      background_first: "#8de0f6",
      background_second: "rgb(182, 247, 118)",
      background_third: "rgb(211, 136, 83)",
      counter: 0,
    };
  }
  changeColor = () => {
    let rang = ["green", "#b3cde0", "#f4b6c2", "#e6e6ea"];
    let zamine = ["#461220", "#011f4b", "#251e3e", "#1e1f26"];
    if (this.state.counter > 3) {
      this.setState({
        counter: 0,
        color: rang[this.state.counter],
        background_first: " #8de0f6",
        background_second: " rgb(182, 247, 118)",
        background_third: " rgb(211, 136, 83)",
      });
    } else
      this.setState({
        color: rang[this.state.counter],
        background_first: zamine[this.state.counter],
        background_second: zamine[this.state.counter],
        background_third: zamine[this.state.counter],
        counter: this.state.counter + 1,
      });
  };

  render() {
    return (
      <div className="App">
        <SnowStorm
          animationInterval={50}
          snowCharacter={"*"}
          vMaxY={2}
          vMaxX={2}
        />
        <Element name="Home" className="element" />
        <Navbar></Navbar>
        <div className="changetheme" style={{position:'absolute',marginLeft:'20px',zIndex:'10'}} >
          <img onClick={this.changeColor} src={data.icons.paint} alt="" style={{marginTop:'10px'}}/>
        </div>
        
        

        <TitleSection
          color={this.state.color}
          background={this.state.background_first}
        />
        
        
        <AboutSection
          color={this.state.color}
          background={this.state.background_second}
        />

        <SkillSection
          color={this.state.color}
          background={this.state.background_third}
        />
      </div>
    );
  }
}

export default App;
