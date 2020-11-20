import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";
import "../../../../../Styles/common.scss";
import "../../../../../Styles/reset.scss";

class ProductReviewImgbox extends Component {
  render() {
    console.log(this.props.productdetail);
    // console.log(this.props.productdetail[0].productImg);
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
              {/* <span>{comment}</span> */}
            </div>
            <div className="article-product-review-img-like">
              <span>{comment}</span>
              {/* <span>1,347</span>
              <span>댓글</span>
              <span>165</span> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductReviewImgbox;
