import React, { Component } from "react";
import "./MdChoice.scss";
// import Unisex from

class MdChoice extends Component {
  constructor() {
    super();
    this.state = {
      mdChoiceList: [],
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
          mdChoiceList: res.product,
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
    const { mdChoiceList } = this.state;

    return (
      <div className="MdChoice">
        <div className="title">
          <p>MD's 추천</p>
        </div>
        <div className="cardList">
          {mdChoiceList.map((product) => {
            return (
              <div className="rankingCardList">
                <div className="eachCard">
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
                      <span className="discount">[{product.discount}]</span>
                      <span className="productPrice">
                        {product.productPrice}원
                      </span>
                    </div>
                    <div className="orignalPriceBox">
                      <span>{product.productPrice}원</span>
                    </div>
                  </div>
                </div>
                <div className="ranking">
                  <span>{product.id + 1} </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="Footer">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    );
  }
}

export default MdChoice;
