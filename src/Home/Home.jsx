import React from "react";
import "./Home.css";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  irId = () => {
    this.props.history.push({ pathname: "/1234", ingreso: true });
  };

  render() {
    return (
      <div className="container-fluid">
        <div>
          <button className="btn btn-primary" onClick={this.irId}>
            Ir a Historico
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
