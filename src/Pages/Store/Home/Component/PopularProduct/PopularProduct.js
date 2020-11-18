import React, { Component } from "react";
import "./PopularProduct.scss";
// import Unisex from

class PopularProduct extends Component {
  render() {
    return (
      <div className="popularContainer">
        <div className="title">
          <h2>인기 상품</h2>
        </div>
        <div className="catergories">
          <ul className="categoryList">
            <li className="active">전체</li>
            <li className="inactive">유니섹스</li>
            <li className="inactive">여성</li>
            <li className="inactive">뷰티</li>
            <li className="inactive">가방잡화</li>
            <li className="inactive">슈즈</li>
            <li className="inactive">라이프</li>
            <li className="inactive">테크</li>
          </ul>
        </div>
        <div className="cardList">
          <div className="card">
            <div className="productImgBox">
              <img
                className="productImg"
                alt="제품사진"
                src="images/product/popularProduct0.jpg"
              ></img>
            </div>
            <div className="productDescBox">
              <div>
                <span className="brandName">지프</span>
              </div>
              <div className="productName">
                <span>[SUN KIT][단독상품]Polar Freece Zip-Up (2 COLOR)</span>
              </div>
              <div className="discountPriceBox">
                <span className="discount">25%</span>
                <span className="productPrice">59,900원</span>
              </div>
              <div className="likeReviewBox">
                <span className="productLike">좋아요 26,170</span>
                <span className="productReview">후기 274</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="productImgBox">
              <img
                className="productImg"
                alt="제품사진"
                src="images/product/popularProduct1.jpg"
              ></img>
            </div>
            <div className="productDescBox">
              <div>
                <span className="brandName">지프</span>
              </div>
              <div className="productName">
                <span>[SUN KIT][단독상품]Polar Freece Zip-Up (2 COLOR)</span>
              </div>
              <div className="discountPriceBox">
                <span className="discount">25%</span>
                <span className="productPrice">59,900원</span>
              </div>
              <div className="likeReviewBox">
                <span className="productLike">좋아요 26,170</span>
                <span className="productReview">후기 274</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="productImgBox">
              <img
                className="productImg"
                alt="제품사진"
                src="images/product/popularProduct2.jpg"
              ></img>
            </div>
            <div className="productDescBox">
              <div>
                <span className="brandName">지프</span>
              </div>
              <div className="productName">
                <span>[SUN KIT][단독상품]Polar Freece Zip-Up (2 COLOR)</span>
              </div>
              <div className="discountPriceBox">
                <span className="discount">25%</span>
                <span className="productPrice">59,900원</span>
              </div>
              <div className="likeReviewBox">
                <span className="productLike">좋아요 26,170</span>
                <span className="productReview">후기 274</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="productImgBox">
              <img
                className="productImg"
                alt="제품사진"
                src="images/product/popularProduct3.jpg"
              ></img>
            </div>
            <div className="productDescBox">
              <div>
                <span className="brandName">지프</span>
              </div>
              <div className="productName">
                <span>[SUN KIT][단독상품]Polar Freece Zip-Up (2 COLOR)</span>
              </div>
              <div className="discountPriceBox">
                <span className="discount">25%</span>
                <span className="productPrice">59,900원</span>
              </div>
              <div className="likeReviewBox">
                <span className="productLike">좋아요 26,170</span>
                <span className="productReview">후기 274</span>
              </div>
            </div>
          </div>
        </div>
        <div className="popularFooter">
          <button>
            <span>전체 더 보기 ></span>
          </button>
        </div>
      </div>
    );
  }
}

export default PopularProduct;
