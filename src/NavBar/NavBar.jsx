import React, { Component } from "react";
import "./NavBar.css";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="contenedor">
        <button className="botonTransparente">Ver Reporte de Anomalias</button>
      </div>
    );
  }
}

export default NavBar;
