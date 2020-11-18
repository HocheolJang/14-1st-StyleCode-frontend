import React, { Component } from "react";
import "./SignUpDetail.scss";
import "../../Styles/reset.scss";
import "../../Styles/common.scss";
import mainlogo from "./images/mainlogo.png";
import facebookinformation from "./images/facebookinformation.png";

class SignUpDetail extends Component {
  constructor() {
    super();
    this.state = {
      birthdaylist: [],
      monthlist: [],
      daylist: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/birthday.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          birthdaylist: res.year,
          monthlist: res.month,
          daylist: res.day,
        });
      });
  }

  handleChange = (e) => {
    this.setState({ selectOption: e.target.value });
  };

  render() {
    const { birthdaylist, monthlist, daylist } = this.state;
    return (
      <div className="SignUpDetail">
        <div className="main">
          <section className="leftMain">
            <div className="nav">
              <img
                src={mainlogo}
                className="nav-my-picture"
                alt="nav-my-picture"
              />
              <button className="nav-choice-picture">사진선택</button>
            </div>
          </section>
          <section className="rightMain">
            <article className="rightMain-info">
              <div className="facebook-information">
                <a href="www.facebook.com" alt="facebook-information">
                  <img
                    src={facebookinformation}
                    className="facebook-information"
                    alt="facebook-information"
                  />
                </a>
              </div>
              <div className="nick-name">
                <div>
                  <p>닉네임</p>
                </div>
                <input
                  className="nick-name-input"
                  placeholder="닉네임을 입력하세요"
                  required={true}
                  label="Email address"
                ></input>
              </div>
              <div className="email">
                <div>
                  <p>이메일</p>
                </div>
                <input
                  className="email-input"
                  placeholder="이메일을 입력하세요."
                ></input>
              </div>
              <div className="radio">
                <div>
                  <p>성별</p>
                </div>
                <div className="radio-male">
                  <label>
                    <input
                      type="radio"
                      value="Male"
                      checked={this.state.selectOption === "Male"}
                      onChange={this.handleChange}
                    />
                    남자
                  </label>
                </div>
                <div className="radio-female">
                  <label>
                    <input
                      type="radio"
                      value="Female"
                      checked={this.state.selectOption === "Female"}
                      onChange={this.handleChange}
                    />
                    여자
                  </label>
                </div>
              </div>
              <div className="birth">
                <div>
                  <p>생일</p>
                </div>
                <select className="year">
                  {birthdaylist.map((item) => (
                    <option key={item.key} value={item.key}>
                      {item.value}
                    </option>
                  ))}
                </select>
                <select className="month">
                  {monthlist.map((item) => (
                    <option key={item.key} value={item.key}>
                      {item.value}
                    </option>
                  ))}
                </select>
                <select className="day">
                  {daylist.map((item) => (
                    <option key={item.key} value={item.key}>
                      {item.value}
                    </option>
                  ))}
                </select>
              </div>
            </article>
            <article className="rightMain-agree-form">
              <div className="agree-form">
                <div className="agree-form-one">
                  <input
                    type="checkbox"
                    value="all-one-agree"
                    // checked={this.state.allChecked}
                    // onChange={this.handleAllChecked}
                  />
                  <p>전체동의</p>
                </div>
                <div className="agree-form-two">
                  <input
                    type="checkbox"
                    value="two-agree"
                    // checked={this.state.checked1}
                  />
                  <p>(필수) 이용약관 동의</p>
                </div>
                <div className="agree-form-three">
                  <input
                    type="checkbox"
                    value="three-agree"
                    // checked={this.state.checked2}
                  />
                  <p>(필수) 개인정보 처리방침 동의</p>
                </div>
                <div className="agree-form-four">
                  <input
                    type="checkbox"
                    value="four-agree"
                    // checked={this.state.checked3}
                  />
                  <p>(필수) 만 14세 이상 입니다.</p>
                </div>
                <div className="agree-form-five">
                  <input
                    type="checkbox"
                    value="five-agree"
                    // checked={this.state.checked4}
                  />
                  <p>(선택) 마케팅 정보 수신 동의</p>
                </div>
              </div>
            </article>
            <article className="alldone">
              <button className="alldone-button">다 했어요</button>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default SignUpDetail;
