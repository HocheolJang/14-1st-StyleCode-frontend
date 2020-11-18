import React, { Component } from "react";
import Slider from "react-slick";
import "./Jumbotron.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class Jumbotron extends Component {
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

  getJumbotronData = () => {
    fetch("http://localhost:3000/data/jumbotronItem.json", {
      method: "GET",
    })
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

  render() {
    const { jumbotronItem } = this.state;
    const setting = {
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 100000,
      pauseOnHover: true,
    };
    return (
      <div>
        <div className="jumbotronContainer">
          <Slider ref={this.slider} {...setting}>
            {jumbotronItem.map((item, idx) => {
              return (
                <div className="item" key={idx}>
                  <img className="jumboImg" src={item.src} alt={item.alt}></img>
                  <div className="adsText">
                    <div className={item.mainTitleClassName}>
                      <span>{item.mainTitle0}</span>
                      <br />
                      <span>{item.mainTitle1}</span>
                    </div>
                    <div className={item.subTitleClassName}>
                      <span>{item.subTitle0}</span>
                      <br />
                      <span>{item.subTitle1}</span>
                    </div>
                    <span className="carouselBar"></span>
                  </div>
                  <img
                    className="slideBtnLeft"
                    src="images/icon/prev0.png"
                    alt="prev"
                    onClick={this.previous}
                  ></img>
                  <img
                    className="slideBtnRight"
                    src="images/icon/next0.png"
                    alt="next"
                    onClick={this.next}
                  ></img>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
