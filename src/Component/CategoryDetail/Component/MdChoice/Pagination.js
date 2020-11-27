import React, { Component } from "react";
import "./Pagination.scss";

class Pagination extends Component {
  render() {
    const { fetchProduct, activePage } = this.props;
    console.log(activePage);

    return (
      <div className="Pagination">
        <button
          data-idx="0"
          onClick={fetchProduct}
          className={activePage === "0" ? "active" : null}
        >
          1
        </button>
        <button
          data-idx="1"
          onClick={fetchProduct}
          className={activePage === "1" ? "active" : null}
        >
          2
        </button>
        <button
          data-idx="2"
          onClick={fetchProduct}
          className={activePage === "2" ? "active" : null}
        >
          3
        </button>
      </div>
    );
  }
}

export default Pagination;
