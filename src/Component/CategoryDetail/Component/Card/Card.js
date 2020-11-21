import React, { Component } from "react";
import "./Card.scss";
// import Unisex from

class Card extends Component {
  constructor() {
    super();
    this.state = {
      MdChoiceList: [],
      currentCategory: 0,
    };
  }

  getMdChoiceList = () => {
    fetch("http://localhost:3000/data/mdChoiceItem.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          MdChoiceList: res.product,
        });
      });
  };

  componentDidMount() {
    this.getMdChoiceList();
  }

  handleMenuTab = (e) => {
    console.log(e);
  };

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    const { MdChoiceList } = this.state;

    return (
      <div className="Card">
        <div className="title">
          <h2>MD의 선택</h2>
        </div>
        <div className="cardList">
          {MdChoiceList.map((product) => {
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

export default Card;
