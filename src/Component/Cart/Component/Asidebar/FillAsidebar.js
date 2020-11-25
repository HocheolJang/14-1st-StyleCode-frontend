import React, { Component } from "react";
import "./FillAsidebar.scss";

class FillAsidebar extends Component {
  sumOrderPrice = () => {
    const { cartList } = this.props;
    let result = 0;
    for (let i = 0; i < cartList.length; i++) {
      result += cartList[i].productPrice * cartList[i].quantity;
    }
    return result;
  };

  sumDeliveryPrice = () => {
    const { cartList } = this.props;
    let result = 0;
    for (let i = 0; i < cartList.length; i++) {
      result += cartList[i].deliveryFee;
    }
    return result;
  };

  sumDiscountPrice = () => {
    const { cartList } = this.props;
    let result = 0;
    for (let i = 0; i < cartList.length; i++) {
      result +=
        (cartList[i].productPrice - cartList[i].orderPrice) *
        cartList[i].quantity;
    }
    return result;
  };

  sumTotalPrice = () => {
    const { cartList } = this.props;
    let result = 0;
    for (let i = 0; i < cartList.length; i++) {
      result +=
        cartList[i].productPrice * cartList[i].quantity +
        cartList[i].deliveryFee -
        (cartList[i].productPrice - cartList[i].orderPrice) *
          cartList[i].quantity;
    }
    return result;
  };

  render() {
    const { cartList } = this.props;
    console.log(cartList);
    return (
      <div className="FillAsideContainer">
        <div className="priceContainer">
          <div className="totalPrice">
            <span>총 상품금액</span>

            <span>
              {this.sumOrderPrice()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </span>
          </div>
          <div className="deliveryFee">
            <span>총 배송비</span>
            <span>
              (+)&nbsp;
              {this.sumDeliveryPrice()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </span>
          </div>
          <div className="discountPrice">
            <span>할인금액</span>
            <span>
              (-)&nbsp;
              {this.sumDiscountPrice()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </span>
          </div>
          <div className="totalPayPrice">
            <span>총 결제금액</span>
            <span>
              {this.sumTotalPrice()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </span>
          </div>
        </div>
        <button className="orderBtn">
          총 {this.props.cartList.length}개 상품 주문하기
        </button>
        <button className="shoppingMore">쇼핑 계속하기</button>
      </div>
    );
  }
}

export default FillAsidebar;
