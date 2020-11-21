import React, { Component } from "react";
import "./EmptyTable.scss";

class EmptyTable extends Component {
  render() {
    console.log(this.props.list);
    return (
      <>
        <table>
          <thead>
            <tr>
              <th className="orderProduct">주문상품</th>
              <th className="width96">상품금액</th>
              <th className="width96">주문금액</th>
              <th className="width96">배송비</th>
              <th className="width96">주문관리</th>
            </tr>
          </thead>
          <tbody>
            <td colspan="5">
              <span>장바구니에 담긴 상품이 없습니다.</span>
            </td>
          </tbody>
        </table>
      </>
    );
  }
}

export default EmptyTable;
