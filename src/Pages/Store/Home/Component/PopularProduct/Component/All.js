import React, { Component } from "react";
import "./Card.scss";

class All extends Component {
  render() {
    const { popularProductList } = this.props;
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
                    좋아요
                    <span>{product.productLike.toLocaleString("en")}</span>
                  </span>
                  <span className="productReview">
                    후기
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

export default All;
