import React, { Component } from "react";
import "./Product.scss";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch("10.58.1.162:8000/search?keyword=%EB%82%98%EC%9D%B4%ED%82%A4")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productList: res,
        });
      });
  }

  render() {
    const { productList } = this.state;
    console.log(productList);

    return (
      <div className="product">
        <div className="header">
          <div className="title">
            <span>전체보기</span>
          </div>
        </div>
        <div className="cardList">
          {productList.map((product, idx) => {
            return (
              <div className="eachCard" key={idx}>
                <div className="productImgBox">
                  <img
                    className="productImg"
                    alt="제품사진"
                    src={product?.product_image}
                  ></img>
                </div>
                <div className="productDescBox">
                  <div>
                    <span className="brandName">{product?.product_brand}</span>
                  </div>
                  <div className="productName">
                    <span>{product.product_title}</span>
                  </div>
                  <div className="discountPriceBox">
                    <span className="discount">{product?.discount_rate}</span>
                    <span className="productPrice">
                      {product?.discount_price
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
