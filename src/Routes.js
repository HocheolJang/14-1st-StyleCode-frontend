import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import Select from "react-select";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/ProductDetail" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
