import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "./Pages/Store/Home/Home";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import CategoryDetail from "./Component/CategoryDetail/CategoryDetail";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import Cart from "./Component/Cart/Cart";
import Search from "./Component/Search/Search";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Store} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/categories" component={CategoryDetail} />
          <Route exact path="/product" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
