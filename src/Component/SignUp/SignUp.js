import React, { Component } from "react";
import "./SignUp.scss";
// import backgroundImg from "../../../public/images/loginbackground.jpg";

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
      passwordCh: "",
      // agreeA: true,
      agree1: false,
      agree2: false,
      agree3: false,
      agree4: false,
    };
  }

  handleCheckChange = () => {
    const { agreeA, agree1, agree2, agree3, agree4 } = this.state;
    if (!agreeA) {
      this.setState({
        agree1: !agree1,
        agree2: !agree2,
        agree3: !agree3,
        agree4: !agree4,
      });
    }
  };

  handleAgreeCheck = () => {
    const { agree1, agree2, agree3, agree4 } = this.state;
    this.setState({ agree1: !agree1 });
  };

  handleAgreeCheck2 = () => {
    const { agree2 } = this.state;
    this.setState({ agree2: !agree2 });
  };

  handleAgreeCheck3 = () => {
    const { agree3 } = this.state;
    this.setState({ agree3: !agree3 });
  };

  handleAgreeCheck4 = () => {
    const { agree4 } = this.state;
    this.setState({ agree4: !agree4 });
  };

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

  handlePwChChange = (e) => {
    this.setState({ passwordCh: e.target.value });
  };

  handleClick = () => {
    fetch("http://10.58.6.191:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        login_id: this.state.id,
        password: this.state.password,
        nickname: this.state.nickname,
        email: this.state.email,
        birth_date: `${this.state.YEAR}-${this.state.MONTH}-${this.state.DAY}`,
        gender: this.state.gender,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log("결과", res));
  };

  handleOnkeyUp = () => {
    const { password, passwordCh } = this.state;
    const checkPw = passwordCh.length >= 6;
    const checkPw2 = password === passwordCh;
    if (checkPw && checkPw2) {
      alert("비밀번호가 일치합니다.");
    }
    if (!checkPw) {
      alert("비밀번호는 6자리 이상입니다.");
    }
    if (!(checkPw && checkPw2)) {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  componentDidMount() {
    this.getBirthdayDate();
    this.handleClick();
  }

  render() {
    const { year, month, day, id, password } = this.state;
    // console.log(this.state.agree1);
    console.log(this.state.agree2);
    return (
      <div
        className="SignUp"
        style={{ backgroundImage: "URL(images/loginbackground.jpg)" }}
      >
        <div className="main">
          <section className="leftMain">
            <div className="nav">
              <img
                className="nav-my-picture"
                src={
                  this.state.gender === "남자"
                    ? "images/maleicon.png"
                    : "images/femaleicon.png"
                }
                alt="mainlogo"
              />
              <button className="nav-choice-picture">사진 선택</button>
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
                  placeholder="아이디"
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
                  placeholder="비밀번호"
                  value={this.state.password}
                  name="password"
                  onChange={this.handlePwChange}
                  type="password"
                ></input>
              </div>
              <div className="pwCh">
                <div>
                  <p>비밀번호 확인</p>
                </div>
                <input
                  className="pwCh-input"
                  placeholder="비밀번호를 확인해주세요"
                  value={this.state.passwordCh}
                  name="password"
                  onChange={this.handlePwChChange}
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
                <select className="year" onChange={this.handleYearChange}>
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
                  <input
                    type="checkbox"
                    value="all-one-agree"
                    // checked={this.state.agreeA}
                    onClick={this.handleCheckChange}
                  />
                  <p>전체동의</p>
                </div>
                <div className="agree-form-two">
                  <input
                    type="checkbox"
                    value="two-agree"
                    checked={this.state.agree1}
                    onClick={this.handleAgreeCheck}
                  />
                  <p>(필수) 이용약관 동의</p>
                </div>
                <div className="agree-form-three">
                  <input
                    type="checkbox"
                    value="three-agree"
                    checked={this.state.agree2}
                    onClick={this.handleAgreeCheck2}
                  />
                  <p>(필수) 개인정보 처리방침 동의</p>
                </div>
                <div className="agree-form-four">
                  <input
                    type="checkbox"
                    value="four-agree"
                    checked={this.state.agree3}
                    onClick={this.handleAgreeCheck3}
                  />
                  <p>(필수) 만 14세 이상 입니다.</p>
                </div>
                <div className="agree-form-five">
                  <input
                    type="checkbox"
                    value="five-agree"
                    checked={this.state.agree4}
                    onClick={this.handleAgreeCheck4}
                  />
                  <p>(선택) 마케팅 정보 수신 동의</p>
                </div>
              </div>
            </article>
            <article className="alldone">
              <button
                className="alldone-button"
                onClick={this.handleClick}
                // onKeyUp={this.handleOnkeyUp} (필요한 부분이라 삭제하지 않고 나두었습니다.)
              >
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
