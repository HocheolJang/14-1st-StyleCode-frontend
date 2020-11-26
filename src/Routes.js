/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Store/Home/Home";
import CategoryDetail from "./Component/CategoryDetail/CategoryDetail";
import Ootd from "./Pages/Ootd/Ootd";
import Login from "../src/Component/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={CategoryDetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Ootd" component={Ootd} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
