import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import EmptyTable from "./Component//EmptyTable/EmptyTable";
import ProductTable from "./Component/ProductTable/ProductTable";
import FillAsidebar from "./Component/Asidebar/FillAsidebar";
import EmptyAsidebar from "./Component/Asidebar/EmptyAsidebar";
// import Navbar from "../../Component/Navbar/NavbarStore/"
import Footer from "./Component/Footer/Footer";

// const API =
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      isChecked: true,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/cartItem.json", {
      method: "GET",
    })
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
        {/* <Navbar /> */}
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
                {cartList.length < 1 ? (
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
              {cartList.length < 1 ? (
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

// 받아야하는 것
// 로그인된 상태, cartId(상품코드), 상품이미지, 상품명, 칼라, 사이즈, 수량, 상품가격, 주문가격(할인가격), 배송비

// 수량 업데이트
// 로그인된 상태, cartId(pathParameter - 상품코드), cartQuantity

// 카트(상품) 삭제
// 로그인된 상태, cartId(pathParameter - 상품코드)
