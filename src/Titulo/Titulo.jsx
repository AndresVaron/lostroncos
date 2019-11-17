import React, { Component } from "react";
import "./Titulo.css";

class Titulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: ""
    };
  }

  handleChange = e => {
    this.setState({ valor: e.target.value });
  };

  handle = () => {
    this.props.handleVerificar(this.state.valor);
  };
  render() {
    return (
      <div className="contenedorTitulo">
        <h1 className="titulo">Los Troncos</h1>
        <h5>Rastreo Inteligente</h5>
        <input
          className="codigo"
          value={this.state.valor}
          onChange={this.handleChange.bind(this)}
          ref={this.codigo}
          type="text"
          placeholder="Ingresa tu código"
          onKeyDown={event => {
            if (event.key == "Enter") {
              this.handle();
            }
          }}
        ></input>
        <br />
        <button className="botonVerificar" onClick={this.handle}>
          Verificar mi Madera
        </button>
      </div>
    );
  }
}

export default Titulo;
