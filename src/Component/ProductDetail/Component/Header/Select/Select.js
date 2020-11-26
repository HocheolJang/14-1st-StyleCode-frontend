import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBox: [],
      item: [],
      number: 1,
      show: true,
    };
  }

  handleColorChange = (e) => {
    this.setState({ color: e.target.value });
  };

  handleSizeChange = (e) => {
    const { orderBox, item, value, number } = this.state;

    this.setState({ size: e.target.value });
    this.setState({
      orderBox: this.props.productdetail?.discountPrice * number,
    });
    this.setState({ number: number });
  };

  handleRemoveChange = (e) => {
    const { orderBox, number } = this.state;
    this.setState({
      orderBox: this.props.productdetail?.discountPrice * (number - 1),
    });
    this.setState({ number: number - 1 });
  };

  handlePlusChange = (e) => {
    const { orderBox, number } = this.state;
    this.setState({
      orderBox: this.props.productdetail?.discountPrice * (number + 1),
    });
    this.setState({ number: number + 1 });
  };

  goToDetail = () => {
    this.props.history.push("/");
  };

  handleAddtoCart = () => {
    const { color, size, number } = this.state;
    const { id } = this.props;
    fetch("http://10.58.6.106:8000/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6IndlY29kZSJ9.AH-mLzn_mMLOSE7Kk1p4jM_2CHwXkED1qGJk7H7c1QA",
      },
      body: JSON.stringify({
        product_id: id,
        size_id: size,
        color_id: color,
        quantity: number,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("백엔드 콜", res);
      });
  };

  render() {
    const { productdetail, id, sizes } = this.props;
    const { size, color, number } = this.state;
    // console.log(productdetail.productId);
    // console.log(number);
    console.log(size);
    console.log(color);
    // console.log(number);
    // console.log(id);
    // console.log(size);

    return (
      <div>
        <select
          className="header-middle-info-style"
          onChange={this.handleColorChange}
        >
          {productdetail.colors &&
            productdetail.colors.map((color) => (
              <option
                key={color.colorId}
                id={color.colorId}
                label={color.colorName}
                value={color.colorId}
              >
                {color.colorName}
              </option>
            ))}
        </select>
        <select
          className="header-middle-info-size"
          onChange={this.handleSizeChange}
        >
          {productdetail.sizes &&
            productdetail.sizes.map((size) => (
              <option
                key={size.sizeId}
                id={size.sizeId}
                label={size.sizeName}
                value={size.sizeId}
              >
                {size.sizeName}
              </option>
            ))}
        </select>
        {/* <div className="header-middle-info-orderbox-colorsize">
          옵션
          <span>{this.state.color && this.state.color}</span>
          <span>{this.state.size && this.state.size}</span>
        </div> */}
        <div className="header-middle-info-"></div>
        <div className="header-middle-info-orderbox-price">
          총 금액(원)
          <span>
            {(this.state.orderBox && this.state.orderBox).toLocaleString()}
          </span>
        </div>

        <div className="header-middle-info-orderbox">
          <div className="header-middle-info-orderbox-new-box"></div>
          <div className="header-middle-info-orderbox-new-number">
            <div className="header-middle-info-orderbox-new-realnumber">
              {this.state.number}
            </div>
            <div className="header-middle-info-orderbox-new">
              <button
                className="header-middle-info-orderbox-new-minusbutton"
                onClick={
                  this.state.number > 1 ? this.handleRemoveChange : () => false
                }
              >
                <span>
                  <BsFillCaretDownFill size="15px" color="gray" />
                </span>
              </button>
              <button
                className="header-middle-info-orderbox-new-plusbutton"
                onClick={this.handlePlusChange}
              >
                <span>
                  <BsFillCaretUpFill size="15px" color="gray" />
                </span>
              </button>
              <span className="header-middle-info-orderbox-new-letter"></span>
            </div>
          </div>
          <button className="header-middle-info-buy">바로구매</button>
          <button
            className="header-middle-info-cart"
            onClick={this.handleAddtoCart}
          >
            장바구니담기
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Select);
