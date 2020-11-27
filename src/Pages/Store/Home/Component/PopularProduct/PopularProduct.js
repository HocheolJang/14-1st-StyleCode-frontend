import React, { Component } from "react";
import "./PopularProduct.scss";
import All from "./Component/All";
import Unisex from "./Component/Unisex";
import Female from "./Component/Female";
import Beauty from "./Component/Beauty";
import BagEtc from "./Component/BagEtc";
import Shoes from "./Component/Shoes";
import Life from "./Component/Life";
import Tech from "./Component/Tech";

const MAPPING_OBJ = {
  0: <All />,
  1: <Unisex />,
  2: <Female />,
  3: <Beauty />,
  4: <BagEtc />,
  5: <Shoes />,
  6: <Life />,
  7: <Tech />,
};
const MAPPING_MENU = [
  "전체",
  "유니섹스",
  "여성",
  "뷰티",
  "가방잡화",
  "슈즈",
  "라이프",
  "테크",
];

class PopularProduct extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
  }

  handleMenuTab = (idx) => {
    this.setState({
      activeTab: idx,
    });
  };

  render() {
    const { activeTab } = this.state;
    const { handleMenuTab } = this;
    return (
      <div className="popularProduct">
        <div className="title">
          <h2>인기 상품</h2>
        </div>
        <div className="catergories">
          <ul className="categoryList">
            {MAPPING_MENU.map((menu, idx) => {
              return (
                <li
                  key={idx}
                  className={activeTab === idx ? "active" : null}
                  onClick={() => handleMenuTab(idx)}
                >
                  {menu}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="cardContainer">{MAPPING_OBJ[activeTab]}</div>
        <div className="popularFooter">
          <button>
            <span>전체 더 보기 {">"}</span>
          </button>
        </div>
      </div>
    );
  }
}

export default PopularProduct;
