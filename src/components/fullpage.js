import React, { Component } from "react";
import "./fullpage.css";

class FullPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children } = this.props;
    return (
      <div
        className={`fullpage ${this.props.className || ""}`}
        style={{
          background: this.props.background,
        }}
      >
        {children}
      </div>
    );
  }
}
export default FullPage;
