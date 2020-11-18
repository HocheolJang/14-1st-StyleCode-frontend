import React, { Component } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Jumbotron from "./Component/Jumbotron/Jumbotron";
import PopularProduct from "./Component/PopularProduct/PopularProduct";
import PopularBrand from "./Component/PopularBrand/PopularBrand";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <PopularProduct />
        <PopularBrand />
      </>
    );
  }
}

export default Home;
