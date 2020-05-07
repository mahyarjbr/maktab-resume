import React, { Component } from "react";
import FullPage from "../components/fullpage";
import data from "../data.json";
import SkillCard from "../components/SkillCard";
import { Link, Element } from "react-scroll";
import UpScroll from "../components/UpScroll.js";

class SkillSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <FullPage className="third" background={this.props.background}>
          <h1 style={{ color: this.props.color }}>{data.sections[1].title}</h1>
          <div  className="cards-wrapper">
            {data.sections[1].items.map((eachskill) => {
              return <SkillCard color={this.props.color} background={this.props.background} skill={eachskill} />;
            })}
          </div>
        </FullPage>
        <UpScroll background={this.props.background} />
        
      </div>
    );
  }
}
export default SkillSection;
