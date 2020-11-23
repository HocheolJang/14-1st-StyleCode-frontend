import React, { Component } from "react";
import "./Asidebar.scss";

class Asidedbar extends Component {
  render() {
    return (
      <div className="asideContainer">
        <div className="categoriesList">
          <ul>
            <li>전체</li>
            <li>티셔츠</li>
            <li>후드/집업/맨투맨</li>
            <li>셔츠</li>
            <li>니트/가디건</li>
            <li>아우터</li>
            <li>팬츠</li>
            <li>스포츠</li>
            <li>언더웨어</li>
            <li>프리미엄 브랜드</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Asidedbar;
