/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "./Pages/Store/Home/Home";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import Cart from "./Component/Cart/Cart";
import Ootd from "./Pages/Ootd/Ootd";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Store} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Productdetail" component={ProductDetail} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Ootd" component={Ootd} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
