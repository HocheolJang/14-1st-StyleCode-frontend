import React, { Component } from "react";
import "../../ProductDetail.scss";
import "../../../../Styles/common.scss";
import "../../../../Styles/reset.scss";
import Select from "./Select/Select";
import Modal from "react-modal";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      setIsOpen: false,
    };
  }
  openModal = () => {
    this.setState({ setIsOpen: true });
  };

  render() {
    const { productdetail } = this.props;
    const { modalIsOpen, setModalIsOpen } = this.state;
    // console.log(productdetail);

    // console.log(this.state.option1);
    return (
      <header>
        <div className="header-top">
          <div className="header-top-title">
            <p>단독상품</p>
            <p>{productdetail?.headerTopTitle}</p>
          </div>
        </div>
        <div className="header-middle">
          <div className="header-middle-imgbox">
            <img
              className="header-middle-img"
              src={productdetail?.headerMiddleImg}
              alt="productImg"
            ></img>
          </div>
          <div className="header-middle-info">
            <p>최대 쿠폰 적용 가격</p>
            <div className="header-middle-info-pricebox">
              <div className="header-middle-info-pricebox-price">
                <span className="discount">
                  {productdetail?.discount * 100}%
                </span>
                <span className="discount-price">
                  {productdetail?.discountPrice?.toLocaleString()}
                </span>
                <span className="price-unit">원</span>
                <span className="origin-price">
                  {productdetail?.originPrice?.toLocaleString()}
                </span>
              </div>
              <button
                className="header-middle-info-pricebox-coupon"
                onClick={this.openModal}
              >
                <span>쿠폰다운</span>
              </button>
              <Modal isOpen={this.state.setIsOpen}>
                <h2>Modal title</h2>
                <p>Modal body</p>
              </Modal>
            </div>
            <div className="header-middle-info-like">
              <span className="like">좋아요</span>
              <span className="like-number">{productdetail?.likeNumber}</span>
              <span className="review">후기</span>
              <span className="review-number">
                {productdetail?.reviewNumber}
              </span>
            </div>
            <div className="header-middle-info-mile">
              <span className="mile">적립 단추</span>
              <span className="mile-number">{productdetail?.mile}</span>
            </div>
            <div className="header-middle-info-delivery">
              <span className="delivery">무료배송</span>
              <span className="delivery-date">11/23월요일 출고 예정</span>
            </div>
            <Select
              productdetail={productdetail}
              // id={productdetail.id}
              colors={productdetail.colors}
              sizes={productdetail.sizes}
              stocks={productdetail.stocks}
            />
          </div>
        </div>
        <div className="header-bottom">
          <img
            className="header-bottom-brand-img"
            src={productdetail?.headerBottomImg}
            alt="header-bottom-img"
          ></img>
          <div className="header-bottom-brand">
            <p className="header-bottom-brand-title">
              {productdetail?.headerBottomBrand}
            </p>
            <p className="header-bottom-brand-number">
              {productdetail?.brand_product_count}
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
