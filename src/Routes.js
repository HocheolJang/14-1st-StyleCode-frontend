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
import Modal from "./Pages/Ootd/Main/Modal";
// import Login from "./Component/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Ootds" component={Ootd} />
          <Route exact path="/Ootds/Main" component={Main} />
          <Route exact path="/Ootds/Modal" component={Modal} />
          <Route exact path="/Ootds/Comment" component={Comment} />
          <Route exact path="/NavbarOotd" component={NavbarOotd} />
          <Route exact path="/NavbarStore" component={NavbarStore} />
          <Route exact path="/NavbarOotd" component={NavbarOotd} />
          <Route exact path="/NavbarStore" component={NavbarStore} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
