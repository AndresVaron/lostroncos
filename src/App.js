import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Detail from "./MapaPrincipal/MapaPrincipal.jsx";
import { geolocated } from "react-geolocated";

class App extends Component {
  // One-shot position request.
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      location: { lat: 3.5592541, lng: -73.7307292, zoom: 6 }
    };

    navigator.geolocation.getCurrentPosition(this.saveLocation);
    if (
      this.props.isGeolocationAvailable &&
      this.props.isGeolocationEnabled &&
      this.props.coords
    ) {
      this.setState({
        location: {
          lat: this.props.coords.latitude,
          lng: this.props.coords.longitude,
          zoom: 14
        }
      });
    }
  }
  saveLocation = position => {
    this.setState({
      location: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        zoom: 14
      }
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route
            exact
            path="/:id"
            component={() => <Detail myLocation={this.state.location} />}
          />
          <Route path="*" render={() => <Home />} />
        </Switch>
      </Router>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(App);
