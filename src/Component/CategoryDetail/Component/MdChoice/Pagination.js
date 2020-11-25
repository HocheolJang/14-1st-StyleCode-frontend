import React, { Component } from "react";
import "./Pagination.scss";

class Pagination extends Component {
  render() {
    const { fetchProduct } = this.props;
    // console.log(fetchProduct);
    return (
      <div className="Pagination">
        <button data-idx="0" onClick={fetchProduct} className="active">
          1
        </button>
        <button data-idx="1" onClick={fetchProduct}>
          2
        </button>
        <button data-idx="2" onClick={fetchProduct}>
          3
        </button>
      </div>
    );
  }
}

export default Pagination;
