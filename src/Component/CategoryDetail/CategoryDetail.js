import React, { Component } from "react";
import Asidebar from "./Component/Asidebar/Asidebar";
import Jumbotron from "./Component/Jumbotron/Jumbotron";
import MdChoice from "./Component/MdChoice/MdChoice";
import ShowAll from "./Component/ShowAll/ShowAll";
import "./CategoryDetail.scss";

class CategoryDetail extends Component {
  render() {
    return (
      <>
        <div className="categoryDetail">
          <Asidebar />
          <div className="mainContainer">
            <Jumbotron />
            <MdChoice />
            <ShowAll />
          </div>
        </div>
      </>
    );
  }
}

export default CategoryDetail;
