import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";
import "../../../../../Styles/common.scss";
import "../../../../../Styles/reset.scss";
import ProductReviewImgbox from "../ProductReviewImgbox/ProductReviewImgbox";
import Slider from "react-slick";

class ProductReview extends Component {
  render() {
    const { productdetail } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <article className="article-product-review">
        <div className="article-product-review-title">
          <span className="product-review">상품 후기</span>
          <span className="product-review-number">285</span>
        </div>
        <div className="article-product-review-totalimgbox">
          <Slider {...settings}>
            {productdetail.map((product) => (
              <ProductReviewImgbox
                key={product.id}
                id={product.id}
                contentImg={product.productImg}
                authorImg={product.authorImg}
                author={product.author}
                comment={product.comment}
              />
            ))}
          </Slider>
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
