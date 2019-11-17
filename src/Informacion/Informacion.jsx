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
          <h1>¿Qué Hacemos?</h1>
          <div className="row">
            <div className="col-4">
              <div className="seccion">
                <img className="imagen" src={troncos} alt="" />
                <h4>Tala Sostenible de Madera</h4>
                <p>
                  Tenemos industrias avaladas por el gobierno que se aseguran de
                  hacer un uso sostenible de nuestros bosques que aseguran el
                  bienestar de nuestros ecosistemas
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="seccion">
                <img className="imagen" src={camion} alt="" />
                <h4>Tala Sostenible de Madera</h4>
                <p>
                  Tenemos industrias avaladas por el gobierno que se aseguran de
                  hacer un uso sostenible de nuestros bosques que aseguran el
                  bienestar de nuestros ecosistemas
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="seccion">
                <img className="imagen" src={qr} alt="" />
                <h4>Tala Sostenible de Madera</h4>
                <p>
                  Tenemos industrias avaladas por el gobierno que se aseguran de
                  hacer un uso sostenible de nuestros bosques que aseguran el
                  bienestar de nuestros ecosistemas
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
