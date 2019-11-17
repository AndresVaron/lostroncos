import React, { Component } from "react";
import "./NavBar.css";
import { withRouter } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="contenedor">
        <button
          className="botonTransparente"
          onClick={() => {
            this.props.history.push("/errores");
          }}
        >
          Ver Reporte de Anomalias
        </button>
      </div>
    );
  }
}

export default withRouter(NavBar);
