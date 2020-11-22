import React, { Component } from "react";
import "./ShowAll.scss";
// import Unisex from

class ShowAll extends Component {
  constructor() {
    super();
    this.state = {
      showAllList: [],
      currentCategory: 0,
      showDropdown: false,
    };
  }

  getShowAllList = () => {
    fetch("http://localhost:3000/data/showAllItem.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          showAllList: res.product,
        });
      });
  };

  componentDidMount() {
    this.getShowAllList();
  }

  handleMenuTab = (e) => {
    console.log(e);
  };

  filterDropdown = (e) => {
    e.preventDefault();
    // console.log(e);
    this.setState({
      showDropdown: !this.state.showDropdown,
    });
  };

  handleFilter = (e) => {
    console.log(e);
  };

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    const { showAllList } = this.state;

    return (
      <div className="ShowAll">
        <div className="header">
          <div className="title">
            <span>전체보기</span>
          </div>
          <div className="filter">
            <button onClick={this.filterDropdown}>
              <span>최신순</span>
              <span>
                <img src="images/icon/filterArrow.png" alt="상품정렬버튼" />
              </span>
            </button>
            {this.state.showDropdown ? (
              <div className="fliterDropDown">
                {/* {this.state.filterDropdown && } */}
                <ul className="dropdownContent">
                  <li>최신순(최근등록순)</li>
                  <li>인기순(인기많은순)</li>
                  <li>할인율(할인율높은순)</li>
                  <li>
                    가격
                    <span>
                      <img
                        src="images/icon/filterDropDownArrow.png"
                        alt="arrow"
                      />
                    </span>
                    (가격낮은순)
                  </li>
                  <li>
                    가격
                    <span>
                      <img
                        src="images/icon/filterDropDownArrow.png"
                        alt="arrow"
                      />
                    </span>
                    (가격높은순)
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <div className="cardList">
          {showAllList.map((product) => {
            return (
              <div className="eachCard">
                <div className="productImgBox">
                  <img
                    className="productImg"
                    alt="제품사진"
                    src={product.src}
                  ></img>
                </div>
                <div className="productDescBox">
                  <div>
                    <span className="brandName">{product.brandName}</span>
                  </div>
                  <div className="productName">
                    <span>{product.productName}</span>
                  </div>
                  <div className="discountPriceBox">
                    <span className="discount">[{product.discount}]</span>
                    <span className="productPrice">
                      {product.productPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </div>
                  <div className="orignalPriceBox">
                    <span>
                      {product.productPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShowAll;
