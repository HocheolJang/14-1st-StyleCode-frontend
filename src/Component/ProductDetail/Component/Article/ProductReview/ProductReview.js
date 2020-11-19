import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";
import "../../../../../Styles/common.scss";
import "../../../../../Styles/reset.scss";
import ProductReviewImgbox from "../ProductReviewImgbox/ProductReviewImgbox";

class ProductReview extends Component {
  render() {
    const { productdetail } = this.props;
    return (
      <article className="article-product-review">
        <div className="article-product-review-title">
          <span className="product-review">상품 후기</span>
          <span className="product-review-number">285</span>
        </div>
        <div className="article-product-review-totalimgbox">
          <ProductReviewImgbox productdetail={this.props.productdetail} />
          {/* <div className="article-product-review-imgbox">
            <img className="article-product-review-img"></img>
            <div className="article-product-review-img-wrapper">
              <img className="article-product-review-img-logo"></img>
              <div className="article-product-review-img-id">
                <div>
                  <span>은채</span>
                  <span>예버요</span>
                </div>
                <div className="article-product-review-img-like">
                  <span>좋아요</span>
                  <span>1,347</span>
                  <span>댓글</span>
                  <span>165</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="article-product-review-buttonbox">
          <button className="article-product-review-button">
            후기 스타일 모두 보기
          </button>
        </div>
      </article>
    );
  }
}

export default ProductReview;
