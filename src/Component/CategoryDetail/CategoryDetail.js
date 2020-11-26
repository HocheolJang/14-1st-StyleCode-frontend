import React, { Component } from "react";
import Navbar from "../Navbar/NavbarStore/NavbarStore";
import Asidebar from "./Component/Asidebar/Asidebar";
import Jumbotron from "./Component/Jumbotron/Jumbotron";
import MdChoice from "./Component/MdChoice/MdChoice";
import ShowAll from "./Component/ShowAll/ShowAll";
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
        <span>푸터자리</span>
      </div>
    );
  }
}

export default CategoryDetail;
