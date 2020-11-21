import React, { Component } from "react";
import "./ShowAll.scss";
// import Unisex from

class ShowAll extends Component {
  constructor() {
    super();
    this.state = {
      showAllList: [],
      currentCategory: 0,
    };
  }

  getShowAllList = () => {
    fetch("http://localhost:3000/data/showAllItem.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          showAllList: res.product,
        });
      });
  };

  componentDidMount() {
    this.getShowAllList();
  }

  handleMenuTab = (e) => {
    console.log(e);
  };

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    const { showAllList } = this.state;

    return (
      <div className="ShowAll">
        <div className="header">
          <div className="title">
            <span>전체보기</span>
          </div>
          <div className="filter">
            <button>
              <span>최신순</span>
              <span>
                <img src="images/icon/filterArrow.png" alt="상품정렬버튼" />
              </span>
            </button>
          </div>
        </div>
        <div className="cardList">
          {showAllList.map((product) => {
            return (
              <div className="eachCard">
                <div className="productImgBox">
                  <img
                    className="productImg"
                    alt="제품사진"
                    src={product.src}
                  ></img>
                </div>
                <div className="productDescBox">
                  <div>
                    <span className="brandName">{product.brandName}</span>
                  </div>
                  <div className="productName">
                    <span>{product.productName}</span>
                  </div>
                  <div className="discountPriceBox">
                    <span className="discount">[{product.discount}]</span>
                    <span className="productPrice">
                      {product.productPrice}원
                    </span>
                  </div>
                  <div className="orignalPriceBox">
                    <span>{product.productPrice}원</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShowAll;
