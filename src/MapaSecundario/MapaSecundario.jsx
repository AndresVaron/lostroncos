import React from "react";
import "./MapaSecundario.css";
import GoogleMapReact from "google-map-react";
import { withRouter } from "react-router-dom";

class MapaSecundario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingreso: false,
      info: null,
      cargado: false,
      google: null,
      map: null
    };
  }

  componentDidMount() {
    let info = {
      puntos: [
        { lat: 2.552654, lng: -72.836102 },
        { lat: 4.685209, lng: -71.233875 },
        { lat: 4.685209, lng: -71.283875 }
      ]
    };
    //Aqui se hace el fetch
    this.setState({ info: info });
  }

  handleGoogleMapApi(google) {
    var LatLng = google.maps.LatLng,
      LatLngBounds = google.maps.LatLngBounds,
      Marker = google.maps.Marker,
      Polygon = google.maps.Polygon,
      Point = google.maps.Point;
    const map = google.map;
    this.setState({ google: google, map: map });
    if (!this.state.cargado) {
      this.setState({ cargado: true });
      var bounds = new LatLngBounds();
      this.state.info.puntos.forEach(element => {
        bounds.extend(new LatLng(element.lat, element.lng));
      });
      let fileType = "k";
      let color = "red";
      let url = "http://maps.google.com/mapfiles/ms/icons/";
      url += color + "-dot.png";
      var markers = this.state.info.puntos.map(function(location, i) {
        return new window.google.maps.Marker({
          position: location,
          icon: url
        });
      });
      var MarkerClusterer = require("node-js-marker-clusterer");
      new MarkerClusterer(map, markers, {
        imagePath: "images/" + fileType
      });
    }
  }

  render() {
    if (this.state.info === null) {
      return (
        <div className="container-fluid">
          <div className="row"></div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 noPadding">
              <div className="contenedorPrincipal">
                <div style={{ height: "100vh", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyAEN10VnQRdN67sDTlx-mfWapGXB8rLMas",
                      libraries: ["drawing,geometry"].join(",")
                    }}
                    defaultCenter={{
                      lat: 3.1732734,
                      lng: -74.382545
                    }}
                    defaultZoom={6.5}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={this.handleGoogleMapApi.bind(this)}
                  ></GoogleMapReact>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(MapaSecundario);
