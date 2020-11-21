import React, { Component } from "react";
import "./ShowAll.scss";
// import Unisex from

class ShowAll extends Component {
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
      <div className="ShowAll">
        <div className="title">
          <p>전체보기</p>
        </div>
        <div className="cardList">
          {MdChoiceList.map((product) => {
            return (
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
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShowAll;
