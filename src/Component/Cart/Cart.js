import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
// import EmptyTable from "./Component//EmptyTable/EmptyTable";
import ProductTable from "./Component/ProductTable/ProductTable";
import FillAsidebar from "./Component/Asidebar/FillAsidebar";
// import EmptyAsidebar from "./Component/Asidebar/EmptyAsidebar";
// import Navbar from "../../Component/Navbar/NavbarStore/"
import Footer from "./Component/Footer/Footer";

class Cart extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <div className="cart">
          <div className="container">
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
                {/* <EmptyTable /> */}
                <ProductTable />
              </div>
              {/* <EmptyAsidebar /> */}
              <FillAsidebar />
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Cart;
