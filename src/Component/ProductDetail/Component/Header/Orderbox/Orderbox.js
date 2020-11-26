import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";
import "../../../../../Styles/common.scss";
import "../../../../../Styles/reset.scss";
import "./Orderbox.scss";

class Orderbox extends Component {
  render() {
    const { id, value, label } = this.props;
    return (
      <div className="Orderbox">
        <div className="header-middle-info-pricebox-new">
          <p>{label}</p>
        </div>
      </div>
    );
  }
}

export default Orderbox;
