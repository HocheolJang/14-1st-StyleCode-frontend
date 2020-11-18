import React, { Component } from "react";
import Slider from "react-slick";
import "./Jumbotron.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Jumbotron extends Component {
  // next() {
  //   this.slider.slickNext();
  // }
  // previous() {
  //   this.slider.slickPrev();
  // }

  previous = () => {};
  next = () => {
    this.slickNext();
  };

  render() {
    const setting = {
      // arrows: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: true,
    };
    return (
      <div>
        <div className="jumbotronContainer">
          <Slider {...setting}>
            <div className="item">
              <img
                className="jumboImg"
                src="images/jumbotron/jumbotron0.jpg"
                alt="점보트론 이미지 1"
              ></img>
              <div className="adsText">
                <div className="mainTitle white">
                  <span>신규 브랜드 런칭</span>
                  <br />
                  <span>할리데이비슨!</span>
                </div>
                <div className="subTitle white">
                  <span>이 겨울 우리들의 로망 ~ 오토바이</span>
                  <br />
                  <span>이제는 당신이 탈 차례 ! </span>
                </div>
                <span className="carouselBar"></span>
              </div>
              {/* <button className="slick-prev"> */}
              <img
                className="slideBtnLeft"
                src="images/icon/prev0.png"
                alt="prev"
                onClick={this.previous}
              ></img>
              {/* </button>
              <button className="slick-next"> */}
              <img
                className="slideBtnRight"
                src="images/icon/next0.png"
                alt="next"
                onClick={this.next}
              ></img>
              {/* </button> */}
            </div>
            <div className="item">
              <img
                className="jumboImg"
                src="images/jumbotron/jumbotron1.jpg"
                alt="점보트론 이미지 2"
              ></img>
              <div className="adsText">
                <div className="mainTitle">
                  <span>오.직.스.코</span> <br />
                  <span>색조 장인들</span>
                </div>
                <div className="subTitle">
                  <span>키스미 | 캔메이크 | 릴리바이레드</span>
                  <br />
                  <span>색조장인의 브랜드의 깜짝특가 만나보기!</span>
                </div>
                <span className="carouselBar"></span>
              </div>
              {/* <button className="slick-prev"> */}
              <img
                className="slideBtnLeft"
                src="images/icon/prev0.png"
                alt="prev"
                // onClick={this.previous}
              ></img>
              {/* </button>
              <button> */}
              <img
                className="slideBtnRight"
                src="images/icon/next0.png"
                alt="next"
                // onClick={this.next}
              ></img>
              {/* </button> */}
            </div>
            <div className="item">
              <img
                className="jumboImg"
                src="images/jumbotron/jumbotron2.jpg"
                alt="점보트론 이미지 3"
              ></img>
              <div className="adsText">
                <div className="mainTitle">
                  <span>누가 나를 이상하게</span>
                  <br />
                  <span>생각하면 어때?</span>
                </div>
                <div className="subTitle">
                  <span className="subTitle">복잡한 세상 편하게 살자~</span>
                  <br />
                  <span className="subTitle">
                    지금은 나를 더 사랑해줄 때니까
                  </span>
                </div>
                <span className="carouselBar"></span>
              </div>
              <img
                className="slideBtnLeft"
                src="images/icon/prev0.png"
                alt="prev"
                // onClick={this.previous}
              ></img>
              <img
                className="slideBtnRight"
                src="images/icon/next0.png"
                alt="next"
                // onClick={this.next}
              ></img>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
