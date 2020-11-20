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

  getTrendList = () => {
    fetch("http://localhost:3000/data/trendItem.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          trendList: res.item,
          bulletList: res.event,
        });
      });
  };
  componentDidMount() {
    this.getTrendList();
  }

  render() {
    const { trendList, bulletList } = this.state;
    // console.log(bulletList);

    return (
      <div className="trendAllContainer">
        <div className="title">
          <h2>트렌드 기획전</h2>
        </div>
        <div className="trendContainer">
          <div className="leftContainer">
            {trendList.map((trend, idx) => {
              // console.log(trend.bullet);
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
                          <span>{trend.productCnt}개 더 보기</span>
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
