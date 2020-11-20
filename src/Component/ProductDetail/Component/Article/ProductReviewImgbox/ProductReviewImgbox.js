import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";
import "../../../../../Styles/common.scss";
import "../../../../../Styles/reset.scss";

class ProductReviewImgbox extends Component {
  render() {
    const {
      productdetail,
      contentImg,
      authorImg,
      author,
      comment,
    } = this.props;
    return (
      <div className="article-product-review-imgbox">
        <img
          className="article-product-review-img"
          src={contentImg}
          alt=""
        ></img>
        <div className="article-product-review-img-wrapper">
          <img
            className="article-product-review-img-logo"
            src={authorImg}
            alt=""
          ></img>
          <div className="article-product-review-img-id">
            <div>
              <span>{author}</span>
            </div>
            <div className="article-product-review-img-like">
              <span>{comment}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductReviewImgbox;
