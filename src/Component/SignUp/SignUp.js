import React, { Component } from "react";
import "./SignUp.scss";
import "../../Styles/reset.scss";
import "../../Styles/common.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      year: [],
      month: [],
      day: [],
      nickname: "",
      email: "",
      gender_id: "",
      birth_date: "",
      id: "",
      password: "",
    };
  }

  getBirthdayDate = () => {
    fetch("http://localhost:3000/data/birthday.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          year: res.year,
          month: res.month,
          day: res.day,
        });
      });
  };

  handleChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
    // this.setState({ value: e.target.value });
    this.setState({ value: e.target.value });

    // this.setState({ password: e.target.value });
    // this.setState({ email: e.target.email });
  };

  handleIdChange = (e) => {
    this.setState({ id: e.target.value });
  };

  handlePwChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleNickChnage = (e) => {
    this.setState({ nickname: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleGenderChange = (e) => {
    this.setState({ gender: e.target.value });
  };

  handleYearChange = (e) => {
    this.setState({ YEAR: e.target.value });
  };

  handleMonthChange = (e) => {
    this.setState({ MONTH: e.target.value });
  };

  handleDayChange = (e) => {
    this.setState({ DAY: e.target.value });
  };

  handleClick = () => {
    fetch("http://10.58.4.87:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        login_id: this.state.id,
        password: this.state.password,
        nickname: this.state.nickname,
        email: this.state.email,
        birth_date: `${this.state.year}-${this.state.month}-${this.state.day}`,
        gender_id: this.state.gender,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log("결과", res));
  };

  componentDidMount() {
    this.getBirthdayDate();
    this.handleClick();
  }

  render() {
    // console.log(this.state.value);
    // console.log(this.state.selectOption);
    // console.log(this.state.YEAR);
    // console.log(this.state.MONTH);
    // console.log(this.state.gender);
    // console.log(this.state.DAY);
    // console.log(this.state.value);
    const { year, month, day } = this.state;
    return (
      <div className="SignUp">
        <div className="main">
          <section className="leftMain">
            <div className="nav">
              <img
                className="nav-my-picture"
                src="images/mainlogo.png"
                alt="mainlogo"
              />
              <button className="nav-choice-picture">사진선택</button>
            </div>
          </section>
          <section className="rightMain">
            <article className="rightMain-info">
              <div className="facebook-information">
                <a href="www.facebook.com" alt="facebook-information">
                  <img
                    src="images/facebookinformation.png"
                    className="facebook-information"
                    alt="facebook"
                  />
                </a>
              </div>
              <div className="id">
                <div>
                  <p>아이디</p>
                </div>
                <input
                  className="id-input"
                  placeholder="ID"
                  value={this.state.id}
                  name="id"
                  onChange={this.handleIdChange}
                  type="text"
                ></input>
              </div>
              <div className="pw">
                <div>
                  <p>비밀번호</p>
                </div>
                <input
                  className="pw-input"
                  placeholder="PASSWORD"
                  value={this.state.password}
                  name="password"
                  onChange={this.handlePwChange}
                  type="password"
                ></input>
              </div>
              <div className="nick-name">
                <div>
                  <p>닉네임</p>
                </div>
                <input
                  className="nick-name-input"
                  placeholder="닉네임을 입력하세요"
                  value={this.state.nickname}
                  name="nickname"
                  onChange={this.handleNickChnage}
                ></input>
              </div>
              <div className="email">
                <div>
                  <p>이메일</p>
                </div>
                <input
                  className="email-input"
                  placeholder="이메일을 입력하세요."
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  name="email"
                ></input>
              </div>
              <div className="radio">
                <div>
                  <p>성별</p>
                </div>
                <div className="radio-male">
                  <label>
                    <input
                      name="Male"
                      type="radio"
                      value="남자"
                      checked={this.state.gender === "남자"}
                      onChange={this.handleGenderChange}
                    />
                    남자
                  </label>
                </div>
                <div className="radio-female">
                  <label>
                    <input
                      type="radio"
                      value="여자"
                      checked={this.state.gender === "여자"}
                      onChange={this.handleGenderChange}
                      name={this.state.name}
                    />
                    여자
                  </label>
                </div>
              </div>
              <div className="birth">
                <div>
                  <p>생일</p>
                </div>
                <select
                  className="year"
                  // value={this.state.value}
                  onChange={this.handleYearChange}
                  // name="year"
                >
                  {year.map((YEAR) => (
                    <option key={YEAR.key} value={YEAR.value}>
                      {YEAR.value}
                    </option>
                  ))}
                </select>
                <select
                  className="month"
                  value={this.state.value}
                  onChange={this.handleMonthChange}
                >
                  {month.map((MONTH) => (
                    <option key={MONTH.key} value={MONTH.value}>
                      {MONTH.value}
                    </option>
                  ))}
                </select>
                <select
                  className="day"
                  value={this.state.value}
                  onChange={this.handleDayChange}
                >
                  {day.map((DAY) => (
                    <option key={DAY.key} value={DAY.value}>
                      {DAY.value}
                    </option>
                  ))}
                </select>
              </div>
            </article>
            <article className="rightMain-agree-form">
              <div className="agree-form">
                <div className="agree-form-one">
                  <input type="checkbox" value="all-one-agree" />
                  <p>전체동의</p>
                </div>
                <div className="agree-form-two">
                  <input type="checkbox" value="two-agree" />
                  <p>(필수) 이용약관 동의</p>
                </div>
                <div className="agree-form-three">
                  <input type="checkbox" value="three-agree" />
                  <p>(필수) 개인정보 처리방침 동의</p>
                </div>
                <div className="agree-form-four">
                  <input type="checkbox" value="four-agree" />
                  <p>(필수) 만 14세 이상 입니다.</p>
                </div>
                <div className="agree-form-five">
                  <input type="checkbox" value="five-agree" />
                  <p>(선택) 마케팅 정보 수신 동의</p>
                </div>
              </div>
            </article>
            <article className="alldone">
              <button className="alldone-button" onClick={this.handleClick}>
                다 했어요
              </button>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default SignUp;
