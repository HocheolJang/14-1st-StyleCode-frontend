import React, { Component } from "react";
import "./MdChoice.scss";
import Pagination from "./Pagination";
// import Unisex from

class MdChoice extends Component {
  constructor() {
    super();
    this.state = {
      mdChoiceList: [],
      activePage: 0,
      offset: 1,
    };
  }

  getAllData = () => {
    fetch("http://10.58.4.75:8000/products/mdchoice/0", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          mdChoiceList: res.mdchoice_list,
        });
      });
  };

  componentDidMount() {
    this.getAllData();
  }

  fetchProduct = (e) => {
    const offset = e.target.dataset.idx;
    // console.log(e.target.dataset.idx);
    fetch(`http://10.58.4.75:8000/products/mdchoice/${offset}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          mdChoiceList: res.mdchoice_list,
          activePage: e.target.dataset.idx,
        });
      });
  };

  handleMenuTab = (e) => {
    // console.log(e);
  };

  render() {
    const { mdChoiceList, activePage } = this.state;
    const { fetchProduct } = this;

    return (
      <div className="MdChoice">
        <div className="title">
          <p>MD's 추천</p>
        </div>
        <div className="cardList">
          {mdChoiceList.map((product, idx) => {
            return (
              <div className="rankingCardList" key={idx}>
                <div className="eachCard">
                  <div className="productImgBox">
                    <img
                      className="productImg"
                      alt="제품사진"
                      src={product.main_image_url}
                    ></img>
                  </div>
                  <div className="productDescBox">
                    <div>
                      <span className="brandName">{product.brand}</span>
                    </div>
                    <div className="productName">
                      <span>{product.title}</span>
                    </div>
                    <div className="discountPriceBox">
                      <span className="discount">
                        [{parseInt(product.discount_rate * 100)}%]
                      </span>
                      <span className="productPrice">
                        {(product.discount_price * 1)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </span>
                    </div>
                    <div className="orignalPriceBox">
                      <span>
                        {(product.price * 1)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ranking">
                  <span>{product.id} </span>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination fetchProduct={fetchProduct} activePage={activePage} />
      </div>
    );
  }
}

export default MdChoice;
