import React, { Component } from "react";
import "./SkillCard.css";

class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div style={{ background: this.props.background}} className="card">
        <div className="image-wrapper">
          <img src={skill.content.image} alt="" />
        </div>
        <div className="skill-title-wrapper">
          <h4 style={{ color: this.props.color }}>{skill.content.title}</h4>
        </div>
      </div>
    );
  }
}
export default SkillCard;
