import React, { Component } from "react";
import { Link } from "react-router-dom";

import EmptyTable from "./Component//EmptyTable/EmptyTable";
import ProductTable from "./Component/ProductTable/ProductTable";
import FillAsidebar from "./Component/Asidebar/FillAsidebar";
import EmptyAsidebar from "./Component/Asidebar/EmptyAsidebar";
import Footer from "./Component/Footer/Footer";
import "./Cart.scss";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      isChecked: true,
    };
  }

  componentDidMount() {
    fetch("data/cartItem.json")
      .then((res) => res.json())
      .then((res) => {
        const cartList = res.item.map((item) => {
          item["isChecked"] = true;
          return item;
        });
        this.setState({
          cartList,
        });
      });
  }

  handlePlusBtn = (item) => {
    const cartList = [...this.state.cartList];
    let idx = cartList.indexOf(item);
    if (cartList[idx].quantity < 20) {
      cartList[idx].quantity++;
      this.setState({ cartList });
    } else {
      alert("최대 주문 수량은 20개입니다");
    }
  };

  handleMinusBtn = (item) => {
    const cartList = [...this.state.cartList];
    let idx = cartList.indexOf(item);
    if (cartList[idx].quantity > 1) {
      cartList[idx].quantity--;
      this.setState({ cartList });
    } else {
      return;
    }
  };

  render() {
    const { cartList, isChecked } = this.state;
    const { handlePlusBtn, handleMinusBtn } = this;

    return (
      <>
        <div className="cart">
          <div className="allContainer">
            <div className="headContainer">
              <div className="title">
                <h2>장바구니</h2>
              </div>
              <div className="process">
                <span>장바구니 {">"} </span>
                <span>&nbsp;주문결제 {">"} 주문완료</span>
              </div>
            </div>
            <div className="mainContainer">
              <div className="cartContainer">
                <div className="header">
                  <div className="headerLeft">
                    <input type="checkbox" onClick="CheckAll" />
                    <span onClick="checkAll">전체선택</span>
                  </div>
                  <div className="headerRight">
                    <button>삭제</button>
                  </div>
                </div>
                {cartList.length ? (
                  <EmptyTable />
                ) : (
                  <ProductTable
                    handlePlusBtn={handlePlusBtn}
                    handleMinusBtn={handleMinusBtn}
                    cartList={cartList}
                    isChecked={isChecked}
                  />
                )}
              </div>
              {cartList.length ? (
                <EmptyAsidebar />
              ) : (
                <FillAsidebar cartList={cartList} />
              )}
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Cart;

