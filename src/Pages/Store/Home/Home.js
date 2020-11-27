import React, { Component } from "react";
// import Navbar from "../../../Component/Navbar/NavbarStore/NavbarStore";
import StoreMainJumbotron from "./Component/StoreMainJumbotron/StoreMainJumbotron";
import PopularProduct from "./Component/PopularProduct/PopularProduct";
import PopularBrand from "./Component/PopularBrand/PopularBrand";
import Trend from "./Component/Trend/Trend";
import Footer from "./Component/Footer/Footer";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <div className="mainContainer">
          <StoreMainJumbotron />
          <PopularProduct />
          <PopularBrand />
          <Trend />
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
