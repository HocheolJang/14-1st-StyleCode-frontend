import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "./Pages/Store/Home/Home";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import CategoryDetail from "./Component/CategoryDetail/CategoryDetail";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import Cart from "./Component/Cart/Cart";
import Search from "./Component/";
import Ootd from "./Pages/Ootd/Ootd";

// import Login from "./Component/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Store} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Ootd" component={Ootd} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/ProductDetail" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
