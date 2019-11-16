import React, { Component } from "react";
import "./SideMenu.css";

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="fondoVerde">
        <h1 className="margenTutorial">¡Bienvenido!</h1>
        <p className="margenTutorial">
          En esta aplicación usted podra registrar sus tierras para contactarse
          con propietarios de otros terrenos similares al suyo y asi hacer parte
          de un proyecto productivo mas competitivo y rentable.
        </p>
        <p className="margenTutorial">
          De igual forma podra adquirir creditos para poder poner su proyecto en
          marcha.
        </p>
        <h1>¿Cómo funciona?</h1>
        <p className="margenTutorial">
          1. Para empezar por favor delimite su predio en este mapa
        </p>
        <p className="margenTutorial">
          2. Despues podrá observar los grupos de productores con predios
          similares al suyo que se han asociado para cultivar productos
        </p>
        <p className="margenTutorial">
          3. Una vez seleccione uno de los grupos podrá ver los requerimientos
          financieros y los beneficios económicos que tendra al hacer parte de
          esta asociación
        </p>
      </div>
    );
  }
}

export default SideMenu;
