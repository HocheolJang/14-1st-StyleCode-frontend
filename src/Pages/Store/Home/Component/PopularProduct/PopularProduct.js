import React, { Component } from "react";
import "./PopularProduct.scss";
// import Unisex from

class PopularProduct extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      popularProductList: [],
      currentCategory: 0,
    };
  }

  getcategoriesList = () => {
    fetch("http://localhost:3000/data/popularProduct.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoriesList: res.categories,
        });
      });
  };
  getPopularProductList = () => {
    fetch("http://localhost:3000/data/popularProduct.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          popularProductList: res.product,
        });
      });
  };

  componentDidMount() {
    this.getcategoriesList();
    this.getPopularProductList();
  }

  handleMenuTab = (e) => {
    console.log(e);
  };

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    const { categoriesList, popularProductList } = this.state;

    return (
      <div className="popularProduct">
        <div className="title">
          <h2>인기 상품</h2>
        </div>
        <div className="catergories">
          <ul className="categoryList">
            {categoriesList.map((category) => {
              return (
                <li
                  className="inactive"
                  key={category.id}
                  onClick={this.handleMenuTab}
                >
                  {category.categoryName}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="cardList">
          {popularProductList.map((product) => {
            return (
              <div className="card">
                <div className="productImgBox">
                  <img
                    className="productImg"
                    alt="제품사진"
                    src={product.src}
                  ></img>
                </div>
                <div className="productDescBox">
                  <div>
                    <span className="brandName">{product.brandName}</span>
                  </div>
                  <div className="productName">
                    <span>{product.productName}</span>
                  </div>
                  <div className="discountPriceBox">
                    <span className="discount">{product.discount}</span>
                    <span className="productPrice">
                      {product.productPrice}원
                    </span>
                  </div>
                  <div className="likeReviewBox">
                    <span className="productLike">
                      좋아요<span>{product.productLike}</span>
                    </span>
                    <span className="productReview">
                      후기
                      <span>{product.productReview}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="popularFooter">
          <button>
            <span>전체 더 보기 {">"}</span>
          </button>
        </div>
      </div>
    );
  }
}

export default PopularProduct;
