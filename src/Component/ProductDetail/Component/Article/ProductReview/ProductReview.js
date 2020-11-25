import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";
import "../../../../../Styles/common.scss";
import "../../../../../Styles/reset.scss";
import ProductReviewImgbox from "../ProductReviewImgbox/ProductReviewImgbox";
import Slider from "react-slick";

class ProductReview extends Component {
  render() {
    const { ootd } = this.props.productdetail;
    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
    };
    // console.log(productdetail.ootd);

    console.log("productdetail", ootd);
    return (
      <article className="article-product-review">
        <div className="article-product-review-title">
          <span className="product-review">상품 후기</span>
          <span className="product-review-number">285</span>
        </div>
        <div className="article-product-review-totalimgbox">
          {/* <ProductReviewImgbox productdetail={productdetail} /> */}
          <Slider {...settings}>
            {ootd &&
              ootd.map((product, idx) => (
                <ProductReviewImgbox key={idx} ootd={product} />
              ))}
          </Slider>
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
