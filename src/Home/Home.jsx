import React from "react";
import "./Home.css";
import { withRouter } from "react-router-dom";
import imagenBosque from "./imagen.png";
import NavBar from "../NavBar/NavBar";
import Titulo from "../Titulo/Titulo";
import Informacion from "../Informacion/Informacion";

class Home extends React.Component {
  irId = () => {
    this.props.history.push({ pathname: "/1234", ingreso: true });
  };

  render() {
    return (
      <div className="container-fluid">
        <div>
          <div className="contenedorTransparente">
            <NavBar />
            <Titulo handleVerificar={this.irId} />
          </div>
          <Informacion />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
