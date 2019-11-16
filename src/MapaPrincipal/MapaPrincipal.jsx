import React from "react";
import "./MapaPrincipal.css";
import GoogleMapReact from "google-map-react";
import { withRouter } from "react-router-dom";

class MapaPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      ingreso: false
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
  }

  handleGoogleMapApi(google) {
    var LatLng = google.maps.LatLng,
      LatLngBounds = google.maps.LatLngBounds,
      Marker = google.maps.Marker,
      Point = google.maps.Point;
    const map = google.map;

    var pos1 = new LatLng(23.634501, -102.552783);
    var pos2 = new LatLng(17.987557, -92.929147);
    var pos3 = new LatLng(12.987557, -92.929147);
    var pos4 = new LatLng(17.987557, -98.929147);

    var bounds = new LatLngBounds();
    bounds.extend(pos1);
    bounds.extend(pos2);
    bounds.extend(pos3);
    bounds.extend(pos4);
    map.fitBounds(bounds);

    var markerP1 = new Marker({
      position: pos1,
      map: map
    });
    var markerP2 = new Marker({
      position: pos2,
      map: map
    });
    this.pintarSalto(markerP1, markerP2, map, google);

    setTimeout(
      () => {
        var markerP3 = new Marker({
          position: pos3,
          map: map
        });
        this.pintarSalto(markerP2, markerP3, map, google);
        setTimeout(() => {
          var markerP4 = new Marker({
            position: pos4,
            map: map
          });
          this.pintarSalto(markerP3, markerP4, map, google);
        }, 2000);
      },

      2000
    );
  }

  render() {
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
                    lat: this.props.myLocation.lat,
                    lng: this.props.myLocation.lng
                  }}
                  defaultZoom={this.props.myLocation.zoom}
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

  pintarSalto(markerP1, markerP2, map, google) {
    var lineLength = google.maps.geometry.spherical.computeDistanceBetween(
      markerP1.getPosition(),
      markerP2.getPosition()
    );

    var lineHeading = google.maps.geometry.spherical.computeHeading(
      markerP1.getPosition(),
      markerP2.getPosition()
    );

    var markerA = new google.maps.Marker({
      position: google.maps.geometry.spherical.computeOffset(
        markerP1.getPosition(),
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
        markerP2.getPosition(),
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
      markerP1.getPosition(),
      markerA.getPosition(),
      markerB.getPosition(),
      markerP2.getPosition(),
      0.01
    );

    var line = new google.maps.Polyline({
      path: [markerP1.getPosition(), markerP2.getPosition()],
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