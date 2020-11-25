import React, { Component } from "react";
import "./ProductTable.scss";

class ProductTable extends Component {
  render() {
    const { cartList } = this.props;
    return (
      <>
        <div className="productTableContainer">
          {cartList.map((item, idx) => {
            return (
              <table className="productTable">
                <thead>
                  <tr>
                    <th className="tableOrderProduct">주문상품</th>
                    <th className="width96">상품금액</th>
                    <th className="width96">주문금액</th>
                    <th className="width96">배송비</th>
                    <th className="width96">주문관리</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="product" key={idx}>
                    <td className="orderedProductBox">
                      <div className="orderedProduct">
                        <div className="orderedProductLeft">
                          <div className="checkboxContainer">
                            <input type="checkbox" id={idx} />
                            <label for={idx} />
                          </div>
                          <div className="productImgContainer">
                            <img src={item.src} alt={item.alt} />
                          </div>
                        </div>
                        <div className="orderedProductRight">
                          <div className="productDescContainer">
                            <p>{item.productName}</p>
                          </div>
                          <div className="productOptionContainer">
                            <p>{item.option}</p>
                          </div>
                          <div className="controlQuantityContainer">
                            <button
                              onClick={() => this.props.handleMinusBtn(item)}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => this.props.handlePlusBtn(item)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="originPrice">
                        {(item.productPrice * item.quantity)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </p>
                    </td>
                    <td>
                      <p className="settlePrice">
                        {(item.orderPrice * item.quantity)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </p>
                    </td>
                    <td>
                      <p className="shippingPrice">
                        {item.deliveryFee
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </p>
                    </td>
                    <td className="controlOrderBtnBox">
                      <button className="orderNowBtn">바로주문</button>
                      <button className="deleteItemBtn">삭제</button>
                    </td>
                  </tr>
                  <tr className="totalPrice">
                    <td colSpan="6" className="amountTextBox">
                      <span>상품 </span>
                      <span className="bold">
                        {(item.orderPrice * item.quantity)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                      <span>원 + 배송 </span>
                      <span className="bold">
                        {item.deliveryFee
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                      <span>원 = </span>
                      <span className="bold">
                        {(item.orderPrice * item.quantity + item.deliveryFee)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                      <span className="marginRight15">원</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      </>
    );
  }
}

export default ProductTable;
