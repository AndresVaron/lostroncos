import React, { Component } from "react";
import camion from "./delivery-truck.svg";
import troncos from "./log.svg";
import qr from "./qr-code.svg";
import "./Informacion.css";

class Informacion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contenerdorInformacion">
        <div className="container-fluid">
          <h2>¿Qué Hacemos?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="seccion">
                <img className="imagen" src={troncos} alt="" />
                <h4>Tala Sostenible de Madera</h4>
                <p>
                  Tenemos industrias avaladas por el gobierno que se aseguran de
                  hacer un uso sostenible de los bosques que aseguran el
                  bienestar de nuestros ecosistemas.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="seccion">
                <img className="imagen" src={camion} alt="" />
                <h4>Control de las Transformaciones</h4>
                <p>
                  Mediante la tecnología de Block Chain hacemos seguimiento de
                  la materia prima en cada una de las etapas de la cadena de
                  transformación.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="seccion">
                <img className="imagen" src={qr} alt="" />
                <h4>Tala Sostenible de Madera</h4>
                <p>
                  Empoderamos al usuario final con herramientas que le permitan
                  saber la procedencia y la trayectoria de la madera de los
                  productos que adquiere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Informacion;
