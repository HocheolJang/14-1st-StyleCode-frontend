import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";
import "../../../../../Styles/common.scss";
import "../../../../../Styles/reset.scss";

class ProductReviewImgbox extends Component {
  render() {
    console.log(this.props.productdetail);
    // console.log(this.props.productdetail[0].productImg);
    const { productdetail } = this.props;
    return (
      <div className="article-product-review-imgbox" key={productdetail.id}>
        <img
          className="article-product-review-img"
          src={productdetail.productImg}
          alt=""
        ></img>
        <div className="article-product-review-img-wrapper">
          <img
            className="article-product-review-img-logo"
            src={productdetail.authorImg}
            alt=""
          ></img>
          <div className="article-product-review-img-id">
            <div>
              <span>{productdetail.author}</span>
              <span>{productdetail.comment}</span>
            </div>
            <div className="article-product-review-img-like">
              <span>좋아요</span>
              <span>1,347</span>
              <span>댓글</span>
              <span>165</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductReviewImgbox;
