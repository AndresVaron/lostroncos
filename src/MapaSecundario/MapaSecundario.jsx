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
        { lat: 4.875208, lng: -73.02054 },
        { lat: 6.1427203, lng: -73.3331078 },
        { lat: 5.976686, lng: -75.9630872 },
        {
          lat: 7.9939327,
          lng: -75.2240181
        },
        { lat: 7.7651544, lng: -73.6257812 },
        { lat: 4.9006795, lng: -71.2053298 },
        { lat: 1.8299795, lng: -72.8497586 },
        { lat: 5.771637, lng: -76.844859 },
        { lat: 5.741349, lng: -76.844152 },
        { lat: 5.733495, lng: -76.800789 },
        { lat: 5.628687, lng: -76.866009 },
        { lat: 5.60441, lng: -77.085932 },
        { lat: 2.552654, lng: -72.866102 },
        { lat: 2.552654, lng: -72.836102 },
        { lat: 2.552654, lng: -72.896102 },
        { lat: 2.582654, lng: -72.836102 },
        { lat: 2.522654, lng: -72.836102 },
        { lat: 5.731637, lng: -76.244859 },
        { lat: 5.341349, lng: -76.894152 },
        { lat: 5.533495, lng: -76.400789 },
        { lat: 5.328687, lng: -76.266009 },
        { lat: 5.69441, lng: -77.285932 }
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
                  <button
                    className="btn btn-info btn-back"
                    onClick={() => {
                      this.props.history.goBack();
                    }}
                  >
                    Go Back
                  </button>
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
