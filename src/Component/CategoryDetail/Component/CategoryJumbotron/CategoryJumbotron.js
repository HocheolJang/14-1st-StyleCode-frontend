import React, { Component } from "react";
import Slider from "react-slick";
import "./CategoryJumbotron.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jumbotronAPI } from "../../../../config";

class CategoryJumbotron extends Component {
  constructor() {
    super();
    this.state = {
      jumbotronItem: [],
      jumbotronCurrentPage: 1,
    };
    this.slider = React.createRef();
  }

  previous = () => {
    this.slider.current.slickPrev();
  };
  next = () => {
    this.slider.current.slickNext();
  };

  getJumbotronData = () => {
    fetch(`${jumbotronAPI}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          jumbotronItem: res.item,
        });
      });
  };

  componentDidMount() {
    this.getJumbotronData();
  }

  handleCurrentPage = (e) => {
    this.setState({
      jumbotronCurrentPage: this.state.jumbotronCurrentPage + 1,
    });
  };

  render() {
    const { jumbotronItem } = this.state;
    return (
      <div>
        <div className="categoryJumbotron">
          <Slider ref={this.slider} {...SETTING}>
            {jumbotronItem.map((item, idx) => {
              return (
                <div className="item" key={idx}>
                  <img
                    className="jumboImg"
                    src={item.src}
                    alt={item.alt}
                    onChange={this.handleCurrentPage}
                  />
                  <div className="adsText">
                    <div className={`mainTitle ${item.mainTitleClassName}`}>
                      <span>{item.mainTitle0}</span>
                      <br />
                      <span>{item.mainTitle1}</span>
                    </div>
                    <div className={`subTitle ${item.mainTitleClassName}`}>
                      <span>{item.subTitle0}</span>
                      <br />
                      <span>{item.subTitle1}</span>
                    </div>
                    <span className="carouselBar"></span>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="sliderBox" onClick={this.previous}>
            <div className="sliderBtn">
              <img
                className="slideBtnLeft"
                src="images/icon/arrow.png"
                alt="prev"
              />
            </div>
            <div className="paging">
              <span>1</span>
              <span>of</span>
              <span>{jumbotronItem.length}</span>
            </div>
            <div className="sliderBtn" onClick={this.next}>
              <img
                className="slideBtnRight"
                src="images/icon/arrow.png"
                alt="next"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const SETTING = {
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

export default CategoryJumbotron;
