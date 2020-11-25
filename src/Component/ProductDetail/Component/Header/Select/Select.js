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

    console.log(orderBox);
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
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        //product_id: id (필요한 부분이라, 삭제하지 않았습니다.)
        //product_size: size (필요한 부분이라, 삭제하지 않았습니다.)
        //product_color: color (필요한 부분이라, 삭제하지 않았습니다.)
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("백엔드 콜", res);
      });
  };

  render() {
    const { productdetail } = this.props;
    const { SIZE, COLOR, number } = this.state;
    return (
      <div>
        <select
          className="header-middle-info-style"
          onChange={this.handleColorChange}
        >
          {productdetail.colors &&
            productdetail.colors.map((color, id) => (
              <option key={id}>{color}</option>
            ))}
        </select>
        <select
          className="header-middle-info-size"
          onChange={this.handleSizeChange}
        >
          {productdetail.sizes &&
            productdetail.sizes.map((size, id) => (
              <option key={id}>{size}</option>
            ))}
        </select>
        <div className="header-middle-info-orderbox-colorsize">
          옵션
          <span>{this.state.color && this.state.color}</span>
          <span>{this.state.size && this.state.size}</span>
        </div>
        <div className="header-middle-info-"></div>
        <div className="header-middle-info-orderbox-price">
          총 금액
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
                onClick={this.handleRemoveChange}
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
          <button className="header-middle-info-cart" onClick={this.goToDetail}>
            장바구니담기
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Select);
