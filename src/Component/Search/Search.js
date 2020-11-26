import React, { Component } from "react";
import "./Search.scss";
import Product from "./Component/Product/Product";
import User from "./Component/User/User";
// import Navbar from ""
// import Footer from ""

class Search extends Component {
  constructor() {
    super();
    this.state = {
      brandList: [],
      productList: [],
      ootdList: [],
      userList: [],
      productCount: 0,
      ootdCount: 0,
      userCount: 0,
    };
  }

  getSearchData = () => {
    fetch("http://10.58.6.106:8000/search?keyword=%EB%82%98%EC%9D%B4%ED%82%A4")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        this.setState({
          brandList: res.results.brands,
          productList: res.results.products,
          ootdList: res.results.ootds,
          usersList: res.results.users,
          productCount: res.results.product_count,
          ootdCount: res.results.ootd_count,
          userCount: res.results.user_count,
        });
      });
  };

  componentDidMount() {
    this.getSearchData();
  }

  render() {
    const {
      productList,
      productCount,
      usersList,
      ootdCount,
      userCount,
    } = this.state;

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
                <li>페이크 후드티</li>
                <li>페이크 신발</li>
                <li>아디더스</li>
                <li>페이크 맨투맨</li>
                <li>후리스</li>
                <li>바지</li>
                <li>페이크 바지</li>
              </ul>
            </div>
          </header>
          <div className="brand">
            <p className="subtitle">브랜드</p>
            <div className="brandContainer">
              <span>
                <img src="images/search/fakeLogo.png" alt="페이크 로고" />
              </span>
              <span className="brandName">페이크</span>
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
                <p>페이크 신발 재입고 완료</p>
              </div>
            </div>
          </div>
          <span className="subtitle">상품</span>
          <span className="count">{productCount}</span>
          <div className="product">
            <div className="productListContainer">
              <Product productList={productList} />
            </div>
            <div className="buttonContainer">
              <button className="showAll">모두보기</button>
            </div>
          </div>
          <div className="ootdSection">
            <span className="subtitle">스타일</span>
            <span className="count">{ootdCount}</span>
            <div>{/* ootd 컴포넌트 받아서 map으로 처리 */}</div>
            <div className="buttonContainer">
              <button className="showAll">모두보기</button>
            </div>
          </div>
          <span className="subtitle">사용자</span>
          <span className="count">{userCount}</span>
          <div className="userSection">
            <div>
              <User usersList={usersList} />
            </div>
            <div className="buttonContainer">
              <button className="showAll">모두보기</button>
            </div>
          </div>
        </div>
        {/* 메인 푸터 컴포넌트 받아서 처리 */}
        <div>
          <span>푸우ㅜㅜㅜㅜㅜㅜㅜ터</span>
        </div>
      </div>
    );
  }
}

export default Search;
