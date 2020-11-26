import React, { Component } from "react";
import "./Card.scss";

class Tech extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      popularProductList: [],
      currentCategory: 0,
      activeTab: 0,
    };
  }

  componentDidMount() {
    fetch("/data/popularProduct.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          popularProductList: res.tech,
        });
      });
  }

  render() {
    const { popularProductList } = this.state;
    return (
      <div className="cardList">
        {popularProductList.map((product, idx) => {
          return (
            <div className="card" key={idx}>
              <div className="productImgBox">
                <img className="productImg" alt="제품사진" src={product.src} />
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
                    {product.productPrice.toLocaleString("en")}원
                  </span>
                </div>
                <div className="likeReviewBox">
                  <span className="productLike">
                    좋아요&nbsp;
                    <span>{product.productLike.toLocaleString("en")}</span>
                  </span>
                  <span className="productReview">
                    후기&nbsp;
                    <span>{product.productReview.toLocaleString("en")}</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tech;
