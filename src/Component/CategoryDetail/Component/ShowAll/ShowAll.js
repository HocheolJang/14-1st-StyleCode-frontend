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
      isArrowDown: true,
      sortMethod: "최신순",
    };
  }

  componentDidMount() {
    fetch("http://10.58.4.75:8000/products?sort=0&second=1", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          showAllList: res.category_list,
          src: res.category_list.main_image_url,
        });
      });
  }

  sortProduct = (e) => {
    const sort = e.target.dataset.idx;
    console.log(e.target.id);
    fetch(`http://10.58.4.75:8000/products?sort=${sort}&second=1`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          showAllList: res.category_list,
          showDropdown: !this.state.showDropdown,
          sortMethod: e.target.id,
        });
      });
  };

  handleMenuTab = (e) => {
    // console.log(e);
  };

  filterDropdown = (e) => {
    e.preventDefault();

    this.setState({
      showDropdown: !this.state.showDropdown,
      isArrowDown: !this.state.isArrowDown,
    });
  };

  handleFilter = (e) => {
    // console.log(e);
  };

  render() {
    const { showAllList, showDropdown, sortMethod } = this.state;
    const { filterDropdown, sortProduct } = this;
    // console.log(sortMethod);

    return (
      <div className="ShowAll">
        <div className="header">
          <div className="title">
            <span>전체보기</span>
          </div>
          <div className="filter">
            <button onClick={filterDropdown}>
              <span>{sortMethod}</span>
              <span>
                {!showDropdown ? (
                  <img
                    src="images/icon/filterArrow.png"
                    className="descBtn"
                    alt="상품정렬버튼"
                  />
                ) : (
                  <img
                    src="images/icon/filterArrow.png"
                    className="ascBtn"
                    alt="상품정렬버튼"
                  />
                )}
              </span>
            </button>
            {showDropdown ? (
              <div className="fliterDropDown">
                <ul className="dropdownContent">
                  <li data-idx="0" onClick={sortProduct} id="최신순">
                    최신순 (최근등록순)
                  </li>
                  <li data-idx="1" onClick={sortProduct} id="인기순">
                    인기순 (인기많은순)
                  </li>
                  <li data-idx="2" onClick={sortProduct} id="할인율">
                    할인율 (할인율높은순)
                  </li>
                  <li data-idx="3" onClick={sortProduct} id="가격낮은순">
                    가격&nbsp;
                    <img
                      src="images/icon/filterDropDownArrow.png"
                      alt="arrow"
                      className="descArrow"
                    />
                    (가격낮은순)
                  </li>
                  <li data-idx="4" onClick={sortProduct} id="가격높은순">
                    가격
                    <img
                      src="images/icon/filterDropDownArrow.png"
                      alt="arrow"
                      className="ascArrow"
                    />
                    (가격높은순)
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <div className="cardList">
          {showAllList?.map((product, idx) => {
            return (
              <div className="eachCard" key={idx}>
                <div className="productImgBox">
                  <img
                    className="productImg"
                    alt="제품사진"
                    src={product?.main_image_url}
                  ></img>
                </div>
                <div className="productDescBox">
                  <div>
                    <span className="brandName">{product?.brand}</span>
                  </div>
                  <div className="productName">
                    <span>{product?.title}</span>
                  </div>
                  <div className="discountPriceBox">
                    <span className="discount">
                      [{parseInt(product?.discount_rate * 100)}%]
                    </span>
                    <span className="productPrice">
                      {(product?.discount_price * 1)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </span>
                  </div>
                  <div className="orignalPriceBox">
                    <span>
                      {(product?.price * 1)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
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
