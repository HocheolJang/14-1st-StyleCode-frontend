import React, { Component } from "react";
import Slider from "react-slick";
import "./Jumbotron.scss";

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

    return (
      <div>
        <div className="jumbotron">
          <Slider ref={this.slider} {...SETTING}>
            {jumbotronItem.map((item, idx) => {
              return (
                <div className="item" key={idx}>
                  <img className="jumboImg" src={item.src} alt={item.alt}></img>
                  <div className="adsText">
                    <div className= {`mainTitle ${item.mainTitleClassName}`}>
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
                    className="slideBtnLeft"
                    src="images/icon/prev0.png"
                    alt="prev"
                    onClick={this.previous}
                  />
                  <img
                    className="slideBtnRight"
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
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 100000,
  pauseOnHover: true,
};

export default Jumbotron;
