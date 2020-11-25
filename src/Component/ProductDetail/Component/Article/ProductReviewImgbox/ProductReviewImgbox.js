import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";
import "../../../../../Styles/common.scss";
import "../../../../../Styles/reset.scss";

class ProductReviewImgbox extends Component {
  render() {
    const { ootd } = this.props;
    // console.log(productdetail);

    return (
      <div className="article-product-review-imgbox">
        <img
          className="article-product-review-img"
          src={ootd.ootd_image_url}
          alt=""
        ></img>
        <div className="article-product-review-img-wrapper">
          <img
            className="article-product-review-img-logo"
            src={ootd.authorImg}
            alt=""
          ></img>
          <div className="article-product-review-img-id">
            <div>
              <span>{ootd.author}</span>
            </div>
            <div className="article-product-review-img-like">
              <span>{ootd.description}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductReviewImgbox;
