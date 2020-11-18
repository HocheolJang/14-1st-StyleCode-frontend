import React, { Component } from "react";
import Navbar from "../../../Component/Navbar/NavbarStore/Navbar";
import Jumbotron from "./Component/Jumbotron/Jumbotron";
import PopularProduct from "./Component/PopularProduct/PopularProduct";
import PopularBrand from "./Component/PopularBrand/PopularBrand";
import Trend from "./Component/Trend/Trend";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <PopularProduct />
        <PopularBrand />
        <Trend />
      </>
    );
  }
}

export default Home;
