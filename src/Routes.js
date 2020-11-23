/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Component/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Ootd" component={Ootd} />
          <Route exact path="/Ootd/Main" component={Main} />
          <Route exact path="/NavbarOotd" component={NavbarOotd} />
          <Route exact path="/NavbarStore" component={NavbarStore} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
