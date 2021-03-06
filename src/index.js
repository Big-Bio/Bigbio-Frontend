import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Auth from "./services/auth/auth";

import App from "./app";
import Landing from "./views/Landing/Landing";
import Nodes from "./views/Basics/Basics";
import Resources from "./views/Resources/Resources";
import Instructions from "./views/Instructions/Instructions";
import Dashboard from "./views/Dashboard/Dashboard";
import Registration from "./views/Registration/Registration";
import Login from "./views/Login/Login";

import * as serviceWorker from "./serviceWorker";
import "./style.css";

// /auth/functions.js
function requireAuth() {
  if (!Auth.verifyLogin()) return <App />;
  else return <Dashboard />; // entry point of protected pages
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* render dashboard if logged in */}
      <Route exact path="/" render={requireAuth} />
      <Route path="/basics-of-genomics" component={Nodes} />
      <Route path="/resources" component={Resources} />
      <Route path="/module-instructions" component={Instructions} />
      <Route path="/login" component={Login} />
      <Route exact path="/dash" component={Dashboard} />
      <Route path="/registration/:key" component={Registration} />

      {/* testing routes */}
      <Route exact path="/home" component={Landing} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
