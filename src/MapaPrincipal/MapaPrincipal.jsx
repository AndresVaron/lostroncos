import React from "react";
import "./MapaPrincipal.css";
import GoogleMapReact from "google-map-react";
import { withRouter } from "react-router-dom";
import moment from "moment";

class MapaPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      ingreso: false,
      info: null,
      cargado: false,
      google: null,
      map: null
    };
  }

  componentDidMount() {
    if (this.state.id === "1234") {
    } else {
      this.props.history.push("/");
    }
    if (this.props.location.ingreso === true) {
      this.setState({
        ingreso: true
      });
    } else {
      this.setState({
        ingreso: false
      });
    }
    if (!this.state.ingreso) {
      let info = {
        poly: [
          { lat: 2.552654, lng: -72.836102 },
          { lat: 2.544609, lng: -72.832424 },
          { lat: 2.547288, lng: -72.822045 },
          { lat: 2.558031, lng: -72.825027 },
          { lat: 2.558028, lng: -72.825028 }
        ],
        steps: [
          { lat: 2.579775, lng: -72.760284, img: "images/delivery-truck.png" },
          { lat: 3.502403, lng: -73.690598, img: "images/delivery-truck.png" },
          { lat: 4.08584, lng: -73.674188, img: "images/delivery-truck.png" },
          { lat: 7.05332, lng: -73.082078, img: "images/delivery-truck.png" },
          { lat: 10.357106, lng: -75.4434, img: "images/delivery-truck.png" },
          { lat: 36.881967, lng: -76.271164, img: "images/delivery-truck.png" },
          { lat: 42.295881, lng: -75.39428, img: "images/factory.png" },
          {
            lat: 40.7160658,
            lng: -73.9863171,
            img: "images/delivery-truck.png"
          }
        ]
      };
      //Aqui se hace el fetch
      this.setState({ info: info });
    } else {
      let info = {
        poly: [
          { lat: 2.552654, lng: -72.836102 },
          { lat: 2.544609, lng: -72.832424 },
          { lat: 2.547288, lng: -72.822045 },
          { lat: 2.558031, lng: -72.825027 },
          { lat: 2.558028, lng: -72.825028 }
        ],
        steps: [
          { lat: 2.579775, lng: -72.760284, img: "images/delivery-truck.png" },
          { lat: 3.502403, lng: -73.690598, img: "images/delivery-truck.png" },
          { lat: 4.08584, lng: -73.674188, img: "images/delivery-truck.png" },
          { lat: 7.05332, lng: -73.082078, img: "images/delivery-truck.png" },
          { lat: 10.357106, lng: -75.4434, img: "images/delivery-truck.png" },
          { lat: 36.881967, lng: -76.271164, img: "images/delivery-truck.png" },
          { lat: 42.295881, lng: -75.39428, img: "images/factory.png" },
          {
            lat: 40.7160658,
            lng: -73.9863171,
            img: "images/delivery-truck.png"
          }
        ]
      };
      //Aqui se hace el fetch
      this.setState({ info: info });
    }
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
      var pos = this.state.info.poly;
      if (pos !== undefined) {
        var polygono = new Polygon({
          paths: pos,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: "#FF0000",
          fillOpacity: 0.35
        });
        polygono.setMap(this.state.map);
        var bounds = new LatLngBounds();
        this.state.info.poly.forEach(element => {
          bounds.extend(new LatLng(element.lat, element.lng));
        });
        var center = bounds.getCenter();
        var markerInicial = new google.maps.Marker({
          position: new google.maps.LatLng(center.lat(), center.lng()),
          icon: "images/forest.png",
          map: map
        });
        var infowindow = new google.maps.InfoWindow({
          content: "Hello World!"
        });
        google.maps.event.addListener(markerInicial, "click", function() {
          infowindow.open(map, markerInicial);
        });

        this.state.info.steps.forEach(element => {
          if (element.length !== undefined) {
            element.forEach(element2 => {
              bounds.extend(new LatLng(element2.lat, element2.lng));
            });
          } else {
            bounds.extend(new LatLng(element.lat, element.lng));
          }
        });
        map.fitBounds(bounds);
        if (!this.state.ingreso) {
          var steps = [
            { lat: center.lat(), lng: center.lng(), img: "images/forest.png" }
          ];
          this.state.info.steps.forEach(element => {
            steps.push(element);
          });
          steps.push({
            lat: this.props.myLocation.lat,
            lng: this.props.myLocation.lng,
            img: "images/me.png"
          });
          this.pintarSteps(steps, map, google);
        } else {
        }
      }
    }
  }

  pintarSteps(steps, map, google) {
    console.log(steps);
    setTimeout(() => {
      var step = steps.shift();
      if (steps.length > 0) {
        var markerTemp = new google.maps.Marker({
          position: new google.maps.LatLng(steps[0].lat, steps[0].lng),
          icon: steps[0].img,
          map: map
        });
        var random = Math.floor(Math.random() * 7) + 1;
        var date = moment().format("LL");
        var contentString =
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          `<img src="/images/transporte-${random}.jpg" alt="grego" class="img-transport" />` +
          '<div id="bodyContent">' +
          `<p><b>Revisado el</b> ${date} ` +
          "</div>" +
          "</div>";

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        google.maps.event.addListener(markerTemp, "click", function() {
          infowindow.open(map, markerTemp);
        });
        this.pintarSalto(
          new google.maps.LatLng(step.lat, step.lng),
          new google.maps.LatLng(steps[0].lat, steps[0].lng),
          map,
          google
        );
        this.pintarSteps(steps, map, google);
      }
    }, 1000);
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
                      lat: -5.9040035,
                      lng: -65.9402055
                    }}
                    defaultZoom={4.5}
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

  pintarSalto(pos1, pos2, map, google) {
    var lineLength = google.maps.geometry.spherical.computeDistanceBetween(
      pos1,
      pos2
    );

    var lineHeading = google.maps.geometry.spherical.computeHeading(pos1, pos2);

    var markerA = new google.maps.Marker({
      position: google.maps.geometry.spherical.computeOffset(
        pos1,
        lineLength / 3,
        lineHeading - 60
      ),
      icon: {
        url:
          "https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle_blue.png",
        size: new google.maps.Size(7, 7),
        anchor: new google.maps.Point(3.5, 3.5)
      }
    });
    var markerB = new google.maps.Marker({
      position: google.maps.geometry.spherical.computeOffset(
        pos2,
        lineLength / 3,
        -lineHeading + 120
      ),
      icon: {
        url:
          "https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle_blue.png",
        size: new google.maps.Size(7, 7),
        anchor: new google.maps.Point(3.5, 3.5)
      }
    });

    let gmapsCubicBezier = (
      latlong1,
      latlong2,
      latlong3,
      latlong4,
      resolution
    ) => {
      let B1 = t => {
        return t * t * t;
      };
      let B2 = t => {
        return 3 * t * t * (1 - t);
      };
      let B3 = t => {
        return 3 * t * (1 - t) * (1 - t);
      };
      let B4 = t => {
        return (1 - t) * (1 - t) * (1 - t);
      };
      let getBezier = (C1, C2, C3, C4, percent) => {
        var pos = {};
        pos.x =
          C1.x * B1(percent) +
          C2.x * B2(percent) +
          C3.x * B3(percent) +
          C4.x * B4(percent);
        pos.y =
          C1.y * B1(percent) +
          C2.y * B2(percent) +
          C3.y * B3(percent) +
          C4.y * B4(percent);
        return pos;
      };

      var lat1 = latlong1.lat();
      var long1 = latlong1.lng();
      var lat2 = latlong2.lat();
      var long2 = latlong2.lng();
      var lat3 = latlong3.lat();
      var long3 = latlong3.lng();
      var lat4 = latlong4.lat();
      var long4 = latlong4.lng();

      var points = [];

      for (let it = 0; it <= 1; it += resolution) {
        points.push(
          getBezier(
            {
              x: lat1,
              y: long1
            },
            {
              x: lat2,
              y: long2
            },
            {
              x: lat3,
              y: long3
            },
            {
              x: lat4,
              y: long4
            },
            it
          )
        );
      }
      var path = [];
      for (var i = 0; i < points.length - 1; i++) {
        path.push(new google.maps.LatLng(points[i].x, points[i].y));
        path.push(
          new google.maps.LatLng(points[i + 1].x, points[i + 1].y, false)
        );
      }

      var Line = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeOpacity: 0.0,
        icons: [
          {
            icon: {
              path: "M 0,-1 0,1",
              strokeOpacity: 1,
              scale: 4
            },
            offset: "0",
            repeat: "20px"
          }
        ],
        strokeColor: "grey"
      });

      Line.setMap(map);

      return Line;
    };

    var curvedLine = gmapsCubicBezier(
      pos1,
      markerA.getPosition(),
      markerB.getPosition(),
      pos2,
      0.01
    );

    var line = new google.maps.Polyline({
      path: [pos1, pos2],
      strokeOpacity: 0,
      icons: [
        {
          icon: {
            path: "M 0,-1 0,1",
            strokeOpacity: 1,
            scale: 4
          },
          offset: "0",
          repeat: "20px"
        }
      ]
    });
  }
}

export default withRouter(MapaPrincipal);
