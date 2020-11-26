import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProductDetail.scss";
import Header from "./Component/Header/Header";
import ProductReview from "./Component/Article/ProductReview/ProductReview";
import ProductInfo from "./Component/Article/ProductInfo/ProductInfo";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productdetail: [],
    };
  }

  componentDidMount() {
    fetch("http://10.58.6.106:8000/products/1", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ productdetail: res.product });
      });
  }

  render() {
    return (
      <div className="ProductDetail">
        <nav></nav>
        <main>
          <Header productdetail={this.state.productdetail} />
          <section>
            <ProductReview productdetail={this.state.productdetail} />
            <ProductInfo productdetail={this.state.productdetail} />
          </section>
        </main>
      </div>
    );
  }
}

export default ProductDetail;
