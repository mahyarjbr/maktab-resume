import React, { Component } from "react"; 

import data from "../data.json";
import FullPage from "../components/fullpage";
import {  Element } from "react-scroll";

class AboutSection extends Component {
  state = {};
  render() {
    return (
      <div>
        <FullPage className="second" background={this.props.background}>
          <h1 style={{ color: this.props.color }}>{data.sections[0].title}</h1>
          <div className="paragraphs" style={{ color: this.props.color }}>
            {data.sections[0].items.map((p) => {
              return <p>{p.content}</p>;
            })}
          </div>
        </FullPage>
        
        <Element name="Skill" className="element" />
      </div>
    );
  }
}
export default AboutSection;
