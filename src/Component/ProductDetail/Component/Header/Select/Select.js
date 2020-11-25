import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";
import "../../../../../Styles/common.scss";
import "../../../../../Styles/reset.scss";
// import Orderbox from "../Orderbox/Orderbox";
// import Orderbox2 from "../Orderbox/Orderbox2";
// import "../Orderbox/Orderbox.scss";
// import "../Orderbox/Orderbox2.scss";
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      COLOR: [
        { id: 0, value: "default", label: "[컬러]를 선택하세요." },
        { id: 1, value: "블랙", label: "블랙" },
        { id: 2, value: "옐로우", label: "옐로우" },
        { id: 3, value: "그레이", label: "그레이" },
      ],
      SIZE: [
        { id: 0, value: "default", label: "[사이즈]를 선택하세요." },
        { id: 1, value: "Small", label: "Small" },
        { id: 2, value: "Medium", label: "Medium" },
        { id: 3, value: "Large", label: "Large" },
      ],
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
    // console.log("handleSizeChange");
    const { orderBox, item, value, number } = this.state;

    this.setState({ size: e.target.value });
    // let orderBox2 = [...orderBox, this.props.productdetail[1].price];
    this.setState({
      orderBox: /*orderBox2*/ this.props.productdetail[1].price * number,
    });
    this.setState({ number: number });

    console.log(orderBox);
  };

  handleRemoveChange = (e) => {
    const { orderBox, number } = this.state;
    this.setState({
      orderBox: this.props.productdetail[1].price * (number - 1),
    });
    this.setState({ number: number - 1 });
  };

  handlePlusChange = (e) => {
    const { orderBox, number } = this.state;
    this.setState({
      orderBox: this.props.productdetail[1].price * (number + 1),
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
        //product_id: id
        //product_size: size
        //product_color: color
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("백엔드 콜", res);
      });
  };

  //필요한 정보를 카트에 넣어주어야 한다.
  // id, 개수, 날짜 정보,

  render() {
    console.log(this.state.orderBox);
    console.log(this.state.color);
    console.log(this.state.size);
    console.log(this.state.number);

    const { productdetail } = this.props;
    const { SIZE, COLOR, number } = this.state;
    // console.log(this.props.productdetail[0].id);

    // console.log(productdetail);
    // console.log(this.state.COLOR[1].value);
    // console.log(this.props.productdetail[0].price);

    return (
      <div>
        <select
          className="header-middle-info-style"
          // value={this.state.value}
          onChange={this.handleColorChange}
          defaultValue={COLOR[0].label}
          // options={COLOR}
        >
          {COLOR.map((color) => (
            <option
              key={color.id}
              value={color.value}
              label={color.label}
            ></option>
          ))}
        </select>
        <select
          className="header-middle-info-size"
          // value={this.state.value}
          // onChange={this.handleChange}
          defaultValue={SIZE[0].label}
          onChange={this.handleSizeChange}
        >
          {SIZE.map((size) => (
            <option
              key={size.id}
              value={size.value}
              label={size.label}
            ></option>
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
          {/* <div className="header-middle-info-orderbox-new"> */}
          <div className="header-middle-info-orderbox-new-box"></div>
          {/* </div> */}
          {/* <div className={false ? "header-middle-info-orderbox-new" : ""}></div> */}
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
        {/* {COLOR.map((color) => (
          <Orderbox id={color.id} value={color.value} label={color.label} />
        ))}
          
        <Orderbox2 /> */}
      </div>
    );
  }
}

export default withRouter(Select);
