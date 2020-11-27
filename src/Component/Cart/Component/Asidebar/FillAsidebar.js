import React, { Component } from "react";
import "./FillAsidebar.scss";

class FillAsidebar extends Component {
  sumOrderPrice = () => {
    const { cartList } = this.props;
    let result = 0;
    for (let i = 0; i < cartList.length; i++) {
      result += cartList[i].product_price * cartList[i].quantity;
    }
    return result;
  };

  sumDeliveryPrice = () => {
    const { cartList } = this.props;
    let result = 0;
    for (let i = 0; i < cartList.length; i++) {
      result += cartList[i].shipping_fee;
    }
    return result;
  };

  sumDiscountPrice = () => {
    const { cartList } = this.props;
    let result = 0;
    for (let i = 0; i < cartList.length; i++) {
      result +=
        (cartList[i].product_price - cartList[i].discount_price) *
        cartList[i].quantity;
    }
    return result;
  };

  sumTotalPrice = () => {
    const { cartList } = this.props;
    let result = 0;
    for (let i = 0; i < cartList.length; i++) {
      result +=
        cartList[i].product_price * cartList[i].quantity +
        cartList[i].shipping_fee -
        (cartList[i].product_price - cartList[i].discount_price) *
          cartList[i].quantity;
    }
    return result;
  };

  render() {
    const { cartList } = this.props;
    const {
      sumOrderPrice,
      sumDeliveryPrice,
      sumDiscountPrice,
      sumTotalPrice,
    } = this;
    return (
      <div className="FillAsideContainer">
        <div className="priceContainer">
          <div className="totalPrice">
            <span>총 상품금액</span>

            <span>{parseInt(sumOrderPrice()).toLocaleString("en")}원</span>
          </div>
          <div className="deliveryFee">
            <span>총 배송비</span>
            <span>
              (+)&nbsp;
              {parseInt(sumDeliveryPrice()).toLocaleString("en")} 원
            </span>
          </div>
          <div className="discountPrice">
            <span>할인금액</span>
            <span>
              (-)&nbsp;
              {parseInt(sumDiscountPrice()).toLocaleString("en")} 원
            </span>
          </div>
          <div className="totalPayPrice">
            <span>총 결제금액</span>
            <span>{parseInt(sumTotalPrice()).toLocaleString("en")}원</span>
          </div>
        </div>
        <button className="orderBtn">
          총 {cartList.length}개 상품 주문하기
        </button>
        <button className="shoppingMore">쇼핑 계속하기</button>
      </div>
    );
  }
}

export default FillAsidebar;
