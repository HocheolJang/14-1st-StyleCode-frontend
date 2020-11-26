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
  "Unisex",
  "Female, Beauty, BagEtc, Shoes, Life, Tech",
];

class PopularProduct extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      popularProductList: [],
      currentCategory: 0,
      activeTab: 0,
    };
  }

  getcategoriesList = () => {
    fetch("/data/popularProduct.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoriesList: res.categories,
        });
      });
  };

  getPopularProductList = () => {
    fetch("/data/popularProduct.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          popularProductList: res.all,
        });
      });
  };

  handleMenuTab = (idx) => {
    this.setState({
      activeTab: idx,
    });
    console.log(idx);
  };

  componentDidMount() {
    this.getcategoriesList();
    this.getPopularProductList();
  }

  render() {
    const { categoriesList, popularProductList, activeTab } = this.state;
    const { handleMenuTab } = this;
    // console.log(categoriesList[0]?.product);
    // console.log(popularProductList);
    return (
      <div className="popularProduct">
        <div className="title">
          <h2>인기 상품</h2>
        </div>
        <div className="catergories">
          <ul className="categoryList">
            {categoriesList.map((menu, idx) => {
              return (
                <li
                  key={idx}
                  className={activeTab === idx ? "active" : null}
                  onClick={() => handleMenuTab(idx)}
                >
                  {menu.categoryName}
                </li>
              );
            })}
            {/* {MAPPING_MENU.map((menu, idx) => {
              return (
                <li
                  key={idx}
                  className={activeTab === idx ? "active" : null}
                  onClick={() => handleMenuTab(idx)}
                >
                  {menu}
                </li>
              );
            })} */}
          </ul>
        </div>
        <div className="cardContainer">
          {/* <div>{MAPPING_OBJ[activeTab]}</div> */}

          <All popularProductList={popularProductList} />

          {/* {popularProductList.product?.map((product, idx) => {
            return (
              <div className="card" key={idx}>
                <div className="productImgBox">
                  <img
                    className="productImg"
                    alt="제품사진"
                    src={product.src}
                  />
                </div>
                <div className="productDescBox">
                  <div>
                    <span className="brandName">{product.brandName}</span>
                  </div>
                  <div className="productName">
                    <span>{product.productName}</span>
                  </div>
                  <div className="discountPriceBox">
                    <span className="discount">{product.discount}</span>
                    <span className="productPrice">
                      {product.productPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </span>
                  </div>
                  <div className="likeReviewBox">
                    <span className="productLike">
                      좋아요
                      <span>
                        {product.productLike
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </span>
                    <span className="productReview">
                      후기
                      <span>
                        {product.productReview
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
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
