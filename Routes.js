import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./stylecode-project/src/Pages/Store/Home";
import Login from "./stylecode-project/src/Common/Login/Login";
import SignUp from "./stylecode-project/src/Common/SignUp/SignUp";
import Ootd from "./stylecode-project/src/Pages/Ootd/Ootd";
import Cart from "./stylecode-project/src/Common/Cart/Cart";
import ProductDetail from "./stylecode-project/src/Common/ProductDetail/ProductDetail";
import SearchPage from "./stylecode-project/src/Common/SearchPage/SearchPage";
import Unisex from "./stylecode-project/src/Pages/Store/Unisex/Unisex";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Ootd" component={Ootd} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/ProductDetail" component={ProductDetail} />
          <Route exact path="/SearchPage" component={SearchPage} />
          <Route exact path="/Unisex" component={Unisex} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
