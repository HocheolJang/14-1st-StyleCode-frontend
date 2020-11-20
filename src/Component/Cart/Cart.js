import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <>
        <div className="cartContainer">
          <div className="headContainer">
            <div className="title">
              <h2>장바구니</h2>
            </div>
            <div className="process">
              <span>
                장바구니{">"}주문결제{">"}주문완료{">"}
              </span>
            </div>
          </div>
          <div className="mainContainer">
            <div className="cartContainer">
              <input type="checkbox"></input>
            </div>
            <div className="asideContainer"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
