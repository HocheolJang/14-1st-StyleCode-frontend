import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "./Pages/Store/Home/Home";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import Cart from "./Component/Cart/Cart";
import Search from "./Component/Search/Search";
import Ootd from "./Pages/Ootd/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Store} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/ootd" component={Ootd} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
