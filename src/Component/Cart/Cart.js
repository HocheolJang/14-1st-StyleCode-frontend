import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Navbar from "../../Component/Navbar/NavbarStore/"

import "./Cart.scss";

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
                <table border="5">
                  <thead>
                    <th>주문상품</th>
                    <th>상품금액</th>
                    <th>주문금액</th>
                    <th>배송비</th>
                    <th>주문관리</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>첫번째칸</td>
                      <td>두번째칸</td>
                      <td>세번째칸</td>
                      <td>네번째칸</td>
                      <td>다섯번째칸</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="asideContainer">
                <div className="priceContainer">
                  <div className="totalPrice">
                    <span>총 상품금액</span>
                    <span>0원</span>
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

                <button className="shoppingMore">쇼핑 계속하기</button>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footerContainer">
              <div className="top">
                <div className="topLeft">
                  <p>고객센터 안내</p>
                  <p>1833-8879</p>
                  <span>평일</span>
                  <span>&nbsp;10:00 ~ 19:00 (점심시간 12:00 ~ 14:00)</span>
                </div>
                <div className="topCenter">
                  <div className="title">
                    <p>회사 소개 및 약관 내용</p>
                  </div>
                  <div className="descList">
                    <Link>
                      <p>회사 소개</p>
                    </Link>
                    <Link>
                      <p>이용 약관</p>
                    </Link>
                    <Link>
                      <p>개인정보 취급방침</p>
                    </Link>
                  </div>
                </div>
                <div className="topRight">
                  <p>Follow us</p>
                  <div className="iconContainer">
                    <span>페이스북 아이콘</span>
                    <span>인스타그램 아이콘</span>
                  </div>
                </div>
              </div>
              <div className="middle">
                <p>
                  상호명: 주식회사 스타일쉐어 | 사업자 등록번호: 110-81-95574 |
                  사업자등록정보 확인
                </p>
                <p>
                  통신판매업신고: 제 2015-서울강남-02962호 | 주소: 서울특별시
                  강남구 선릉로93길 35 나라키움 역삼B빌딩 3층 | 대표자: 윤자영 |
                  개인정보책임자: 오형내
                </p>
              </div>
              <div className="bottom">
                <img src="images/icon/escroIcon.png" alt="에스크로 아이콘" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
