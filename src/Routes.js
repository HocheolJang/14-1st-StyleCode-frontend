import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./Pages/Store/Home/Home";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import SignUpDetail from "./Component/SignUpDetail/SignUpDetail";
// import Ootd from "./Pages/Ootd/Ootd";
// import Cart from "./Common/Cart/Cart";
// import ProductDetail from "./Common/ProductDetail/ProductDetail";
// import SearchPage from "./Common/SearchPage/SearchPage";
// import Unisex from "./Pages/Store/Unisex/Unisex";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/Ootd" component={Ootd} /> */}
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/SignUpDetail" component={SignUpDetail} />
          {/* <Route exact path="/Cart" component={Cart} />
          <Route exact path="/ProductDetail" component={ProductDetail} />
          <Route exact path="/SearchPage" component={SearchPage} />
          <Route exact path="/Unisex" component={Unisex} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
