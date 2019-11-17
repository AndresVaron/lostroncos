import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contenedorFooter">
        <p className="p1">@2019, All Rights Reserved</p>
        <p className="p2">Los Troncos</p>
      </div>
    );
  }
}

export default Footer;
