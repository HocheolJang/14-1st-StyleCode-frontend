import React, { Component } from "react";
import "./FillAsidebar.scss";

class FillAsidebar extends Component {
  // constructor(){
  //   this.props(){

  //   }
  // }

  // sumOrderPrice = (this.props.cartList) => {
  //   const {cartList} = this.props
  //   for(let i = 0; i< cartList.length; i++{
  //     (cartList[i].orderPrice * cartList[i].quantity)
  //   })
  // }

  render() {
    const { cartList } = this.props;
    console.log(cartList);
    return (
      <div className="FillAsideContainer">
        <div className="priceContainer">
          <div className="totalPrice">
            <span>총 상품금액</span>
            {/* <span>
              {cartList.map((item, idx) => {
                return sum(item[idx].orderPrice * item[idx].quantity);
              })}
            </span> */}
            <span>원</span>
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
        <button className="orderBtn">
          총 {this.props.cartList.length}개 상품 주문하기
        </button>
        <button className="shoppingMore">쇼핑 계속하기</button>
      </div>
    );
  }
}

export default FillAsidebar;
