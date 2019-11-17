import React, { Component } from "react";
import Fabel from "./Faber-Castell-logo.svg";
import normax from "./normax.svg";
import paperMat from "./Paper_Mate_logo.svg";
import sodimac from "./sodimac.svg";
import "./Sponsors.css";

class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contenedorSponsors">
        <h2>Empresas Certificadas</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <img className="compania1" src={Fabel} alt="" />
            </div>
            <div className="col-4">
              <img className="compania2" src={paperMat} alt="" />
            </div>
            <div className="col-4">
              <img className="compania3" src={sodimac} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
