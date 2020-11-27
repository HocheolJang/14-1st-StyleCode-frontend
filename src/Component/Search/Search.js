import React, { Component } from "react";
import "./Search.scss";
import Product from "./Component/Product/Product";
import User from "./Component/User/User";
import Navbar from "../Navbar/NavbarStore/NavbarStore";
import Footer from "../../Pages/Store/Home/Component/Footer/Footer";
import { searchDataAPI } from "../../config";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      brandList: [],
      productList: [],
      userList: [],
      productCount: 0,
      ootdCount: 0,
      userCount: 0,
    };
  }

  getSearchData = () => {
    fetch(`${searchDataAPI}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          brandList: res.results.brands,
          productList: res.results.products,
          usersList: res.results.users,
          productCount: res.results.product_count,
          userCount: res.results.user_count,
        });
      });
  };

  componentDidMount() {
    this.getSearchData();
  }

  render() {
    const { productList, productCount, usersList, userCount } = this.state;

    return (
      <div className="search">
        <div>
          <Navbar />
        </div>
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
          <div className="brandMarketing">
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
        <Footer />
      </div>
    );
  }
}

export default Search;
