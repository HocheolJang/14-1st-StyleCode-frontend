import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Store/Home/Home";
import CategoryDetail from "./Component/CategoryDetail/CategoryDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={CategoryDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
