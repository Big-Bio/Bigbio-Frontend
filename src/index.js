import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import App from "./app";
import Nodes from "./views/Basics/Basics";
import Resources from "./views/Resources/Resources";
import Instructions from "./views/Instructions/Instructions";
import Login from "./views/Login/Login";
import * as serviceWorker from "./serviceWorker";
import "./style.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/basics-of-genomics" component={Nodes} />
      <Route path="/resources" component={Resources} />
      <Route path="/module-instructions" component={Instructions} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
