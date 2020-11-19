import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import SignUpDetail from "./Component/SignUpDetail/SignUpDetail";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import Navbar from "./Pages/Store/Home/Component/Navbar/Navbar";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/SignUpDetail" component={SignUpDetail} />
          <Route exact path="/ProductDetail" component={ProductDetail} />
          <Route exact path="/" component={Navbar} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
