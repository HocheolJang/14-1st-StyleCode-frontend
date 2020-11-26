import React, { Component } from "react";
import Navbar from "../../Common/Navbar/NavbarStore/NavbarStore";
import Asidebar from "./Component/Asidebar/Asidebar";
import Jumbotron from "./Component/Jumbotron/Jumbotron";
import MdChoice from "./Component/MdChoice/MdChoice";
import ShowAll from "./Component/ShowAll/ShowAll";
import CartFooter from "../Cart/Component/Footer/CartFooter";
import "./CategoryDetail.scss";

class CategoryDetail extends Component {
  render() {
    return (
      <div className="categoryDetail">
        <Navbar />
        <div className="categoryContainer">
          <Asidebar />
          <div className="mainContainer">
            <Jumbotron />
            <MdChoice />
            <ShowAll />
          </div>
        </div>
        <CartFooter />
      </div>
    );
  }
}

export default CategoryDetail;
