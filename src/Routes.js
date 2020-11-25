import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import StoreMain from "./Pages/Store/Home/Home";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/store" component={StoreMain} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
