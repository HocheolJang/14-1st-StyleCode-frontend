import React, { Component } from "react";
import Slider from "react-slick";
import "./StoreMainJumbotron.scss";

class StoreMainJumbotron extends Component {
  constructor() {
    super();
    this.state = {
      jumbotronItem: [],
    };
    this.slider = React.createRef();
  }

  previous = () => {
    this.slider.current.slickPrev();
  };
  next = () => {
    this.slider.current.slickNext();
  };

  componentDidMount() {
    fetch("data/jumbotronItem.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          jumbotronItem: res.item,
        });
      });
  }

  render() {
    const { jumbotronItem } = this.state;

    return (
      <div>
        <div className="storeMainJumbotron">
          <Slider ref={this.slider} {...SETTING}>
            {jumbotronItem.map((item, idx) => {
              return (
                <div className="item" key={idx}>
                  <img className="jumboImg" src={item.src} alt={item.alt} />
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
                  <img
                    className="slideBtn left"
                    src="images/icon/prev0.png"
                    alt="prev"
                    onClick={this.previous}
                  />
                  <img
                    className="slideBtn right"
                    src="images/icon/next0.png"
                    alt="next"
                    onClick={this.next}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

const SETTING = {
  arrows: false,
  dots: false,
  fade: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

export default StoreMainJumbotron;
