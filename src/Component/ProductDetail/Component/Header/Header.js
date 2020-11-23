import React, { Component } from "react";
import "../../ProductDetail.scss";
import "../../../../Styles/common.scss";
import "../../../../Styles/reset.scss";
import Select from "./Select/Select";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { productdetail } = this.props;

    console.log(this.state.option1);
    return (
      <header>
        <div className="header-top">
          <div className="header-top-title">
            <p>단독상품</p>
            <p>{productdetail[1]?.description}</p>
          </div>
        </div>
        <div className="header-middle">
          <div className="header-middle-imgbox">
            <img
              className="header-middle-img"
              src={productdetail[1]?.productImg}
              alt="productImg"
            ></img>
          </div>
          <div className="header-middle-info">
            <p>최대 쿠폰 적용 가격</p>
            <div className="header-middle-info-pricebox">
              <div className="header-middle-info-pricebox-price">
                <span className="discount">
                  {productdetail[1]?.sale * 100}%
                </span>
                <span className="discount-price">
                  {productdetail[1]?.price}
                </span>
                <span className="price-unit">원</span>
                <span className="origin-price">{productdetail[1]?.price}</span>
              </div>
              <button className="header-middle-info-pricebox-coupon">
                <span>쿠폰다운</span>
              </button>
            </div>
            <div className="header-middle-info-like">
              <span className="like">좋아요</span>
              <span className="like-number">26,396</span>
              <span className="review">후기</span>
              <span className="review-number">280</span>
            </div>
            <div className="header-middle-info-mile">
              <span className="mile">적립 단추</span>
              <span className="mile-number">599</span>
            </div>
            <div className="header-middle-info-delivery">
              <span className="delivery">무료배송</span>
              <span className="delivery-date">11/23월요일 출고 예정</span>
            </div>
            <Select />

            <button className="header-middle-info-buy">바로구매</button>
            <button className="header-middle-info-cart">장바구니담기</button>
          </div>
        </div>
        <div className="header-bottom">
          <img
            className="header-bottom-brand-img"
            src={productdetail[1]?.productImg}
            alt="header-bottom-img"
          ></img>
          <div className="header-bottom-brand"></div>
        </div>
      </header>
    );
  }
}

export default Header;
