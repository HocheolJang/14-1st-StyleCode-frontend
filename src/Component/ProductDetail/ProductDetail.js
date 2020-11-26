import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProductDetail.scss";
import Header from "./Component/Header/Header";
import ProductReview from "./Component/Article/ProductReview/ProductReview";
import ProductInfo from "./Component/Article/ProductInfo/ProductInfo";
import NavbarStore from "../../Common/Navbar/NavbarStore/NavbarStore";
import Footer from "../../Pages/Store/Home/Component/Footer/Footer";
import "../../Pages/Store/Home/Component/Footer/Footer.scss";
import "../../Common/Navbar/NavbarStore/NavbarStore.scss";
class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productdetail: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/productdetailsample.json", {
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
        <NavbarStore />
        <main>
          <Header productdetail={this.state.productdetail} />
          <section>
            <ProductReview productdetail={this.state.productdetail} />
            <ProductInfo productdetail={this.state.productdetail} />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default ProductDetail;
