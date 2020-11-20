import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Component/SignUp/SignUp";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
