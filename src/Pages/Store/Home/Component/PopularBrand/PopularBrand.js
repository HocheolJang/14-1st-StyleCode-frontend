import React, { Component } from "react";
import "./PopularBrand.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class PopularBrand extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 2.5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1.5,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1.5,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1.5,
          },
        },
      ],
    };

    return (
      <div>
        <div className="popularBrandContainer">
          <header>
            <div className="title">
              <h2>인기 상품</h2>
            </div>
            {/* <div className="carouselBtn">
              <img
                className="prevBtn"
                src="images/icon/prev1.png"
                alt="좌측으로 넘기는 버튼"
              ></img>
              <img
                className="nextBtn"
                src="images/icon/next1.png"
                alt="우측으로 넘기는 버튼"
              ></img>
            </div> */}
          </header>
          <div className="carousel">
            <Slider {...settings}>
              <div className="brandItem">
                <div className="brandImgBox">
                  <img
                    className="brandItemImg"
                    src="images/brand/brand0.jpg"
                    alt="브랜드"
                  ></img>
                  <div className="brandItemDescBox">
                    <div className="brandItemDesc">
                      <span className="brandName">모르모트</span>
                      <span className="brandProductCnt">( 329 )</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brandItem">
                <img
                  className="brandItemImg"
                  src="images/brand/brand1.jpg"
                  alt="브랜드"
                ></img>
                <div className="brandItemDescBox">
                  <div className="brandItemDesc">
                    <span className="brandName">모르모트</span>
                    <span className="brandProductCnt">( 329 )</span>
                  </div>
                </div>
              </div>
              <div className="brandItem">
                <img
                  className="brandItemImg"
                  src="images/brand/brand2.jpg"
                  alt="브랜드"
                ></img>
                <div className="brandItemDescBox">
                  <div className="brandItemDesc">
                    <span className="brandName">모르모트</span>
                    <span className="brandProductCnt">( 329 )</span>
                  </div>
                </div>
              </div>
              <div className="brandItem">
                <img
                  className="brandItemImg"
                  src="images/brand/brand3.jpg"
                  alt="브랜드"
                ></img>
                <div className="brandItemDescBox">
                  <div className="brandItemDesc">
                    <span className="brandName">모르모트</span>
                    <span className="brandProductCnt">( 329 )</span>
                  </div>
                </div>
              </div>
              <div className="brandItem">
                <img
                  className="brandItemImg"
                  src="images/brand/brand4.jpg"
                  alt="브랜드"
                ></img>
                <div className="brandItemDescBox">
                  <div className="brandItemDesc">
                    <span className="brandName">모르모트</span>
                    <span className="brandProductCnt">( 329 )</span>
                  </div>
                </div>
              </div>
              <div className="brandItem">
                <img
                  className="brandItemImg"
                  src="images/brand/brand5.jpg"
                  alt="브랜드"
                ></img>
                <div className="brandItemDescBox">
                  <div className="brandItemDesc">
                    <span className="brandName">모르모트</span>
                    <span className="brandProductCnt">( 329 )</span>
                  </div>
                </div>
              </div>
              <div className="brandItem">
                <img
                  className="brandItemImg"
                  src="images/brand/brand6.jpg"
                  alt="브랜드"
                ></img>
                <div className="brandItemDescBox">
                  <div className="brandItemDesc">
                    <span className="brandName">모르모트</span>
                    <span className="brandProductCnt">( 329 )</span>
                  </div>
                </div>
              </div>
              <div className="brandItem">
                <img
                  className="brandItemImg"
                  src="images/brand/brand7.jpg"
                  alt="브랜드"
                ></img>
                <div className="brandItemDescBox">
                  <div className="brandItemDesc">
                    <span className="brandName">모르모트</span>
                    <span className="brandProductCnt">( 329 )</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <footer>
            <button>
              <span>브랜드 더 보기 ></span>
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default PopularBrand;
