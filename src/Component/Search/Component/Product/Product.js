import React, { Component } from "react";
import "./Product.scss";

class Product extends Component {
  render() {
    const { productList } = this.props;

    return (
      <div className="product">
        <div className="cardList">
          {productList?.map((product, idx) => {
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
                    <span className="productName">
                      {product?.product_title}
                    </span>
                  </div>
                  <div className="discountPriceBox">
                    <span className="discount">
                      {parseInt(product?.discount_rate * 100)}%
                    </span>
                    <span className="productPrice">
                      {(product?.discount_price * 1).toLocaleString("en")}원
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
