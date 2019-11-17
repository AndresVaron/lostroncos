import React from "react";
import "./Home.css";
import { withRouter } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Titulo from "../Titulo/Titulo";
import Informacion from "../Informacion/Informacion";
import Sponsors from "../Sponsors/Sponsors";
import Footer from "../Footer/Footer";

class Home extends React.Component {
  irId = id => {
    this.props.history.push({ pathname: "/" + id, ingreso: true });
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
          <Sponsors />
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
