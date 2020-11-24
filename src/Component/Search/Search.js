import React, { Component } from "react";
import "./Search.scss";
// import Navbar from ""
// import Footer from ""

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div>{/* 네브바 컴포넌트 받아서 처리 */}</div>
        <div className="searchContainer">
          <header>
            <div className="relatedContainer">
              <span>관련</span>
              <ul>
                <li>맨투맨</li>
                <li>후드티</li>
                <li>숏패딩</li>
                <li>나이키 후드티</li>
                <li>나이키 신발</li>
                <li>아디다스</li>
                <li>나이키 맨투맨</li>
                <li>후리스</li>
                <li>바지</li>
                <li>나이키 바지</li>
              </ul>
            </div>
          </header>
          <div className="brand">
            <p className="subtitle">브랜드</p>
            <div className="brandContainer">
              <span>
                <img src="images/search/fakeLogo.png" alt="페이크 로고" />
              </span>
              <span className="brandName">나이키</span>
            </div>
          </div>
          <div className="trend">
            <p className="subtitle">기획전</p>
            <div className="marketingContainer">
              <div>
                <img
                  className="marketingItem"
                  src="images/search/marketingItem.jpg"
                  alt="페이크 로고"
                />
              </div>
              <div className="marketingTitle">
                <p>
                  <span className="fontRed">[독점]</span> 지금 놓치면 품절 !
                </p>
                <p>나이키 신발 재입고 완료</p>
              </div>
            </div>
          </div>
          <div className="product">
            <span className="subtitle">상품</span>
            <span className="count">7054</span>
            <div>{/* 상품 컴포넌트 받아서 map으로 처리 */}</div>
            <footer>
              <buttonContainer>모두보기</buttonContainer>
            </footer>
          </div>
          <div className="style">
            <p className="subtitle">스타일</p>
            <span className="count">스타일갯수(데이터받기)</span>
            <div>{/* ootd 컴포넌트 받아서 map으로 처리 */}</div>
            <buttonContainer>
              <button className="showAll">모두보기</button>
            </buttonContainer>
          </div>
          <div className="user">
            <p className="subtitle">사용자</p>
            <span className="count">사용자수(데이터받기)</span>
            <div>{/* 데이터 받아서 map으로 처리 */}</div>
            <buttonContainer>
              <button className="showAll">모두보기</button>
            </buttonContainer>
          </div>
        </div>
        <div>{/* 메인 푸터 컴포넌트 받아서 처리 */}</div>
      </div>
    );
  }
}

export default Search;
