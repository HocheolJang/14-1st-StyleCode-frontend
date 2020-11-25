import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Trend.scss";

class Trend extends Component {
  constructor() {
    super();
    this.state = {
      trendList: [],
      bulletList: [],
    };
  }

  componentDidMount() {
    fetch("/data/trendItem.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          trendList: res.item,
          bulletList: res.event,
        });
      });
  }

  render() {
    const { trendList, bulletList } = this.state;

    return (
      <div className="trend">
        <div className="title">
          <h2>트렌드 기획전</h2>
        </div>
        <div className="trendContainer">
          <div className="leftContainer">
            {trendList.map((trend, idx) => {
              if (idx % 2 === 0) {
                return (
                  <div className="item" key={idx}>
                    <div className="imgContainer">
                      <div className="trendImgLeft">
                        <img src={trend.src0} alt={trend.alt0} />
                      </div>
                      <div className="trendImgRight">
                        <img src={trend.src1} alt={trend.alt0} />
                      </div>
                      <div className="circle">
                        <img src={bulletList[trend.bullet]} alt="" />
                      </div>
                    </div>
                    <div className="descContainer">
                      <div className="mainTitle">
                        <span>{trend.mainTitle0}</span>
                      </div>
                      <div className="mainTitle">
                        <span>{trend.mainTitle1}</span>
                      </div>
                      <div className="showAll">
                        <Link to="#">
                          <span>{trend.productCnt}개 더 보기</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="rightContainer">
            {trendList.map((trend, idx) => {
              if (idx % 2 === 1) {
                return (
                  <div className="item" key={idx}>
                    <div className="imgContainer">
                      <div className="trendImgLeft">
                        <img src={trend.src0} alt={trend.alt0} />
                      </div>
                      <div className="trendImgRight">
                        <img src={trend.src1} alt={trend.alt0} />
                      </div>
                      <div className="circle">
                        <img src={bulletList[trend.bullet]} alt="" />
                      </div>
                    </div>
                    <div className="descContainer">
                      <div className="mainTitle">
                        <span>{trend.mainTitle0}</span>
                      </div>
                      <div className="mainTitle">
                        <span>{trend.mainTitle1}</span>
                      </div>
                      <div className="showAll">
                        <Link to="#">
                          <span>
                            {trend.productCnt
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            개 더 보기
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Trend;
