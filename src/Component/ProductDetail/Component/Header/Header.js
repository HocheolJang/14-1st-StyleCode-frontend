import React, { Component } from "react";
import "../../ProductDetail.scss";
import "../../../../Styles/common.scss";
import "../../../../Styles/reset.scss";

class Header extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     productdetail: [],
  //   };
  // }
  // componentDidMount() {
  //   fetch("http://localhost:3000/data/productdetail.json", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState(
  //         { productdetail: res.productlist },
  //         console.log(this.state.productdetail)
  //       );
  //     });
  // }

  render() {
    // const { productdetail } = this.state;
    // if (productdetail.length) {
    //   console.log(productdetail[0]?.contentImg);
    // }
    const { productdetail } = this.props;
    return (
      <header>
        <div className="header-top">
          <div className="header-top-title">
            <p>단독상품</p>
            <p>슈펜 베이직 스니커즈 AFHC20A02[블프특가](~11/29일까지)</p>
          </div>
        </div>
        <div className="header-middle">
          <div className="header-middle-imgbox">
            <img
              className="header-middle-img"
              // src="https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              src={productdetail[0]?.contentImg}
              alt="productImg"
            ></img>
          </div>
          <div className="header-middle-info">
            <p>최대 쿠폰 적용 가격</p>
            <div className="header-middle-info-pricebox">
              <div className="header-middle-info-pricebox-price">
                <span className="discount">32%</span>
                <span className="discount-price">53,910</span>
                <span className="price-unit">원</span>
                <span className="origin-price">79,000</span>
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
            <select className="header-middle-info-style">
              <option>색상</option>
            </select>
            <select className="header-middle-info-size">
              <option>사이즈</option>
            </select>
            <button className="header-middle-info-buy">바로구매</button>
            <button className="header-middle-info-cart">장바구니담기</button>
          </div>
        </div>
        <div className="header-bottom">
          <img
            className="header-bottom-img"
            src={productdetail[0]?.contentImg}
            alt="header-bottom-img"
          ></img>
          <div className="header-bottom-link"></div>
        </div>
      </header>
    );
  }
}

export default Header;
