import React, { Component } from "react";
import "./Navbar.css";
import { Link, Element } from "react-scroll";
import data from "../data.json";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar" >
      <nav className="navbar fixed-top navbar-expand-lg   ">
        <ul className="navbar-nav ml-auto  ">
          <li className="nav-item ">
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={0}
            >
              <a className="nav-link" href="">
                about
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="Skill"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a className="nav-link" href="">
                skills
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    );
  }
}
export default Navbar;


