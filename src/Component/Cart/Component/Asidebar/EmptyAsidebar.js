import React, { Component } from "react";
import "./EmptyAsidebar.scss";

class Emptyasidebar extends Component {
  render() {
    return (
      <div className="asideContainer">
        <div className="priceContainer">
          <div className="totalPrice">
            <span>총 상품금액</span>
            <span>0원</span>
          </div>
          <div className="deliveryFee">
            <span>총 배송비</span>
            <span>(+)0원</span>
          </div>
          <div className="discountPrice">
            <span>할인금액</span>
            <span>(-)원</span>
          </div>
          <div className="totalPayPrice">
            <span>총 결제금액</span>
            <span>0원</span>
          </div>
        </div>
        <button className="shoppingMore">쇼핑 계속하기</button>
      </div>
    );
  }
}

export default Emptyasidebar;
