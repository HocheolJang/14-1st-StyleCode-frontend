import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";
import "../../../../../Styles/common.scss";
import "../../../../../Styles/reset.scss";
import "./Orderbox2.scss";

class Orderbox2 extends Component {
  render() {
    // console.log(this.props);
    const { SIZE } = this.props;
    return (
      <div className="Orderbox">
        <div className="header-middle-info-pricebox-new"></div>
      </div>
    );
  }
}

export default Orderbox2;
