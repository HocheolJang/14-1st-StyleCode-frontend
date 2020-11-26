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
      isAllChecked: true,
    };
  }

  componentDidMount() {
    fetch("http://10.58.6.106:8000/carts", {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6IndlY29kZSJ9.AH-mLzn_mMLOSE7Kk1p4jM_2CHwXkED1qGJk7H7c1QA",
      },
    })
      // fetch("/data/cartItem.json")
      .then((res) => res.json())
      .then((res) => {
        const cartList = res.product.map((item) => {
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
    let cartId = cartList[idx].cart_id;
    if (cartList[idx].quantity < 20) {
      cartList[idx].quantity++;
      this.setState({ cartList });
      fetch(`http://10.58.6.106:8000/carts/${cartId}`, {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6IndlY29kZSJ9.AH-mLzn_mMLOSE7Kk1p4jM_2CHwXkED1qGJk7H7c1QA",
        },
        method: "POST",
        body: JSON.stringify({
          quantity: cartList[idx].quantity,
        }),
      });
    } else {
      alert("최대 주문 수량은 20개입니다");
    }
  };

  handleMinusBtn = (item) => {
    const cartList = [...this.state.cartList];
    let idx = cartList.indexOf(item);
    let cartId = cartList[idx].cart_id;

    if (cartList[idx].quantity > 1) {
      cartList[idx].quantity--;
      this.setState({ cartList });
      fetch(`http://10.58.6.106:8000/carts/${cartId}`, {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6IndlY29kZSJ9.AH-mLzn_mMLOSE7Kk1p4jM_2CHwXkED1qGJk7H7c1QA",
        },
        method: "POST",
        body: JSON.stringify({
          quantity: cartList[idx].quantity,
        }),
      });
    } else {
      return;
    }
  };

  handleDeleteItemBtn = (item) => {
    // console.log(item.id);
    const cartList = [...this.state.cartList];
    let idx = cartList.indexOf(item);
    let cartId = cartList[idx].cart_id;
    fetch(`http://10.58.6.106:8000/carts/${cartId}`, {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6IndlY29kZSJ9.AH-mLzn_mMLOSE7Kk1p4jM_2CHwXkED1qGJk7H7c1QA",
      },
      method: "DELETE",
    });
  };

  handleCheckAllBox = () => {
    const { isAllChecked } = this.state;
    this.setState({
      isAllChecked: !isAllChecked,
      // isChecked: !item.Checked,
    });
    console.log(isAllChecked);
  };

  handleCheckBox = (item) => {
    // console.log(item);
    this.setState({ isChecked: !item.Checked });
  };

  render() {
    const { cartList, isChecked, allCheck } = this.state;
    const {
      handlePlusBtn,
      handleMinusBtn,
      handleDeleteItemBtn,
      handleCheckBox,
    } = this;

    console.log(cartList);

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
                    <input
                      type="checkbox"
                      onChange="handleCheckAllBox"
                      checked={allCheck}
                    />
                    <span onClick="checkAll">전체선택</span>
                  </div>
                  <div className="headerRight">
                    <button>삭제</button>
                  </div>
                </div>
                {cartList.length ? (
                  <ProductTable
                    handlePlusBtn={handlePlusBtn}
                    handleMinusBtn={handleMinusBtn}
                    cartList={cartList}
                    isChecked={isChecked}
                    handleDeleteItemBtn={handleDeleteItemBtn}
                    handleCheckBox={handleCheckBox}
                  />
                ) : (
                  <EmptyTable />
                )}
              </div>
              {cartList.length ? (
                <FillAsidebar cartList={cartList} />
              ) : (
                <EmptyAsidebar />
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
