import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";
import "../../../../../Styles/common.scss";
import "../../../../../Styles/reset.scss";
import Orderbox from "../Orderbox/Orderbox";
import Orderbox2 from "../Orderbox/Orderbox2";
import "../Orderbox/Orderbox.scss";
import "../Orderbox/Orderbox2.scss";
// import Select from "react-select";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      COLOR: [
        { id: 0, value: "default", label: "[컬러]를 선택하세요." },
        { id: 1, value: "Black", label: "블랙" },
        { id: 2, value: "Yellow", label: "옐로우" },
        { id: 3, value: "Gray", label: "그레이" },
      ],
      SIZE: [
        { id: 0, value: "default", label: "[사이즈]를 선택하세요." },
        { id: 1, value: "Small", label: "Small" },
        { id: 2, value: "Medium", label: "Medium" },
        { id: 3, value: "Large", label: "Large" },
      ],
      orderBox: [],
      item: [],
      priceBox: 0,
    };
  }

  handleColorChange = (e) => {
    this.setState({ color: e.target.value }, console.log(this.state.color));
  };

  handleSizeChange = (e) => {
    console.log("handleSizeChange");
    // const { orderBox, item, value } = this.state;
    this.setState({ size: e.target.value }, console.log(this.state.size));
    // let orderBox2 = [...orderBox];
  };

  render() {
    const { SIZE, COLOR } = this.state;

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
        <div className="Orderbox">
          <div className="header-middle-info-pricebox-new">
            {this.state.color && this.state.color}
            {this.state.size && this.state.size}
          </div>
        </div>
        {/* {COLOR.map((color) => (
          <Orderbox id={color.id} value={color.value} label={color.label} />
        ))}
          
        <Orderbox2 /> */}
      </div>
    );
  }
}

export default Select;
