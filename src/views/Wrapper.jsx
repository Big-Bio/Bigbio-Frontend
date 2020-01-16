import React from "react";
import {withRouter} from "react-router-dom";
import Auth from "../services/auth/auth";
import Dashboard from "./Dashboard/Dashboard";
import Landing from "./Landing/Landing";

// toDO: make componennt that handles login / logout make component for access at different levels with different subroutes
// TODO: make loading so that dashboard does not flast
class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedin: null,
    };
    Auth.verifyLogin().then(login => this.setState({loggedin: login}));
  }

  Logout = function() {
    this.setState({loggedin: Auth.logout(this.props.history)});
  };

  render() {
    if (this.state.loggedin) return <Dashboard logout={this.Logout.bind(this)} />;
    else if (this.state.loggedin == null) return <></>;
    else return <Landing />;
    // conditionally render routes
  }
}

export default withRouter(Wrapper);
