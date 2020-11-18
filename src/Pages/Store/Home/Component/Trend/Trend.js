import React, { Component } from "react";
import "./Trend.scss";

class Trend extends Component {
  render() {
    return (
      <div className="trendContainer">
        <div className="title">
          <h2>트렌드 기획전</h2>
        </div>
        <div className="trendContainer">
          <div className="leftContainer">
            <div className="item">
              <div className="imgContainer">
                <div className="trendImgLeft">
                  {/* <img src="images/trend/trend0.jpg" alt="trend0"></img> */}
                </div>
                <div className="trendImgRight">
                  {/* <img src="images/trend/trend1.jpg" alt="trend1"></img> */}
                </div>
                <div className="circle"></div>
              </div>
              <div className="descContainer">
                <div className="mainTitleUp"></div>
                <div className="mainTitleDown"></div>
                <div className="showAll"></div>
              </div>
            </div>
          </div>
          <div className="rightContainer"></div>
        </div>
      </div>
    );
  }
}

export default Trend;
