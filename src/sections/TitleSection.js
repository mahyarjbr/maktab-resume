import React, { Component } from "react";
import FullPage from "../components/fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import { Link, Element } from "react-scroll";

class TitleSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <FullPage className="first" background={this.props.background}>
          <div>
            <h1 className="title" style={{ color: this.props.color }}>
              {data.title}
            </h1>
          </div>
          <div>
            <h2 style={{ color: this.props.color }}>{data.subtitle}</h2>
          </div>
          <div>
            {Object.keys(data.links).map((key) => {
              return <SocialIcon url={data.links[key]} />;
            })}
          </div>
        </FullPage>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
          <div class="downArrow bounce">
            <img src={data.icons.down} alt="" />
          </div>
        </Link>
        <Element name="About" className="element" />
      </div>
    );
  }
}
export default TitleSection;
