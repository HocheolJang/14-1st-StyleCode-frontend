import React, { Component } from "react";
import "./ProductTable.scss";

class ProductTable extends Component {
  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th colSpan="2" className="tableOrderProduct">
                주문상품
              </th>
              <th className="width96">상품금액</th>
              <th className="width96">주문금액</th>
              <th className="width96">배송비</th>
              <th className="width96">주문관리</th>
            </tr>
          </thead>
          <tbody>
            <tr className="product">
              <td className="checkbox">
                <input type="checkbox" />
              </td>
              <td className="orderedProductBox">
                <div className="orderedProduct">
                  <div className="orderedProductLeft">
                    <img src="images/cart/cart1.jpg" alt="상품명" />
                  </div>
                  <div>
                    <div className="orderedProductRight">
                      <span>
                        [카메라보호]방탄 케이스 #가드 핏 #아이폰12 시리즈 (추가)
                      </span>
                    </div>
                    <div>
                      <span>기종 : 아이폰6/6S(공용)</span>
                    </div>
                    <div className="controlQuantity">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </td>
              <td>4800원</td>
              <td>2900원</td>
              <td>2500원</td>
              <td className="controlOrderBtnBox">
                <button className="orderNowBtn">바로주문</button>
                <button className="deleteItemBtn">삭제</button>
              </td>
            </tr>
            <tr className="totalPrice">
              <td colSpan="6">
                <span>상품 </span>
                <span className="bold"> 2,900</span>
                <span>원 + 배송</span>
                <span className="bold"> 2,500</span>
                <span>원 = </span>
                <span className="bold">5,400</span>
                <span>원</span>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default ProductTable;
