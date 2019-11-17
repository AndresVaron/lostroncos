import React, { Component } from "react";
import "./Titulo.css";

class Titulo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contenedorTitulo">
        <h1 className="titulo">Los Troncos</h1>
        <h5>Rastreo Inteligente</h5>
        <input
          className="codigo"
          ref={this.codigo}
          type="text"
          placeholder="Ingresa tu código"
        ></input>
        <br />
        <button className="botonVerificar" onClick={this.props.handleVerificar}>
          Verificar mi Madera
        </button>
      </div>
    );
  }
}

export default Titulo;
