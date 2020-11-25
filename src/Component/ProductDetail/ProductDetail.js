import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProductDetail.scss";
import "../../Styles/reset.scss";
import "../../Styles/common.scss";
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
    fetch("http://localhost:3000/data/productdetail.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          { productdetail: res.productlist }
          // console.log(this.state.productdetail)
        );
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
