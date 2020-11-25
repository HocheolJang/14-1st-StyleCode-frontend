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
    fetch("/data/popularProduct.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoriesList: res.categories,
        });
      });
  };
  getPopularProductList = () => {
    fetch("/data/popularProduct.json")
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
                  />
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
                      {product.productPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </span>
                  </div>
                  <div className="likeReviewBox">
                    <span className="productLike">
                      좋아요
                      <span>
                        {product.productLike
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </span>
                    <span className="productReview">
                      후기
                      <span>
                        {product.productReview
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
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
