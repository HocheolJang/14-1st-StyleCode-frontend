/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Store/Home/Home";
import Login from "./Common/Login/Login";
import SignUp from "./Common/SignUp/SignUp";
import Ootd from "./Pages/Ootd/Ootd";
import Cart from "./Common/Cart/Cart";
import ProductDetail from "./Common/ProductDetail/ProductDetail";
import SearchPage from "./Common/SearchPage/SearchPage";
import Unisex from "./Pages/Store/Unisex/Unisex";
import NavbarOotd from "./Common/Navbar/NavbarOotd/NavbarOotd";
import NavbarStore from "./Common/Navbar/NavbarStore/NavbarStore";
import Main from "./Pages/Ootd/Main/Main";

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
