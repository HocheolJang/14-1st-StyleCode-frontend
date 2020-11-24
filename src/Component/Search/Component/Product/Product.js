import React, { Component } from "react";
import "./Product.scss";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount(){
    fetch("http://localhost:3000/data/searchProductItem.json”, {
      method: "GET"
    })
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        showAllList: res.product
      })
    }
  }

  render() {
    const { showAllList} = this.state;

    return (
      <div className="product">
        <div className="header">
          <div className="title">
            <span>전체보기</span>
          </div>
        </div>
        <div className="cardList">
          {showAllList.map((product, idx) => {
            return (
              <div className="eachCard" key={idx}>
                <div className="productImgBox">
                  <img
                    className="productImg"
                    alt="제품사진"
                    src={product?.main_image_url}
                  ></img>
                </div>
                <div className="productDescBox">
                  <div>
                    <span className="brandName">{product?.brand}</span>
                  </div>
                  <div className="productName">
                    <span>{product?.title}</span>
                  </div>
                  <div className="discountPriceBox">
                    <span className="discount">
                      [{parseInt(product?.discount_rate * 100)}%]
                    </span>
                    <span className="productPrice">
                      {(product?.discount_price * 1)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </span>
                  </div>
                  <div className="orignalPriceBox">
                    <span>
                      {(product?.price * 1)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </span>
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

export default Product;
