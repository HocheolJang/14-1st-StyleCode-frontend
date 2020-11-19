import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./SignUp.scss";
import "../../Styles/reset.scss";
import "../../Styles/common.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      password: "",
      checkpassword: "",
      login: [],
    };
  }

  handleClick = (e) => {
    fetch("http://10.58.0.206:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        login_id: this.state.id,
        password: this.state.password,
        // nickname : "nick1" ,
        // email : "wecode22@we".com,
        // gender_id : "1" ,
        // birth_date : “2000-02-22”
        // email: this.state.id,
        // password: this.state.password,
        // name: "jj",
        // phone_number: "0000000001",
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과", result));
  };

  //   // if (result.Authorization) {
  //   //   localStorage.getItem("token");
  //   //   console.log("토큰 왔음");
  //   //   localStorage.setItem("token", result.Authorization);
  //   // }
  //   // if (result.Message === "SUCCESS") {
  //   //   this.props.history.push("/login-moonjoo");
  //   // } else {
  //   //   alert("정보가 일치하지 않습니다.");
  //   // }
  // };

  // componentDidMount() {
  //   fetch("http://localhost:3000/data/birthday.json", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         loginMethod: res.login
  //       });
  //     });
  // }

  handleIDChange = (e) => {
    this.setState({ id: e.target.value });
  };
  handlePWChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handleCheckPw = (e) => {
    this.setState({ checkpassword: e.target.value });
  };

  checkValidation = (e) => {
    // e.preventDefault();
    const { id, password, checkpassword } = this.state;
    const checkId = id.includes("@");
    const checkPw = password.length >= 6;
    const checkPwOneMore = password === checkpassword;
    if (checkId && checkPw && checkPwOneMore) {
      alert("로그인성공");
    }
    if (!checkId) {
      alert("ID는 @를 포함해야 합니다.");
    }
    if (!checkPw) {
      alert("비밀번호는 6자리 이상입니다.");
    }
    if (!checkPwOneMore) {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  goToMain = () => {
    this.props.history.push("/SignUpDetail");
  };

  render() {
    console.log(this.state.id, this.state.password, this.state.checkpassword);
    return (
      <div className="SignUp">
        <div className="main">
          <header>
            <div className="section-logo">StyleCode</div>
            <div className="section-sign">가입</div>
          </header>
          <div className="section">
            <article className="login-information">
              <input
                className="id"
                placeholder="ID"
                type="text"
                value={this.state.id}
                onChange={this.handleIDChange}
              ></input>
              <input
                className="password"
                placeholder="비밀번호(최소6자)"
                type="password"
                value={this.state.password}
                onChange={this.handlePWChange}
              ></input>
              <input
                className="password-check"
                placeholder="비밀번호 확인"
                type="password"
                value={this.state.checkpassword}
                onChange={this.handleCheckPw}
              ></input>
              <button
                className="signin"
                onClick={() => {
                  this.checkValidation();
                  // this.goToMain();
                  this.handleClick();
                }} /*{this.checkValidation}*/
                onKeyup={this.checkValidation}
              >
                가입
              </button>
            </article>
            <article className="social-login">
              <div className="facebook-signin">
                <a href="www.facebook.com">
                  <img
                    className="facebook-signin"
                    alt="facebook"
                    src="images/facebook.png"
                  />
                </a>
              </div>
              <div className="twitter-signin">
                <a href="www.twitter.com">
                  <img
                    className="twitter-signin"
                    alt="twitter"
                    src="images/twitter.png"
                  />
                </a>
              </div>
              <div className="google-signin">
                <a href="www.google.com">
                  <img
                    className="google-signin"
                    alt="google"
                    src="images/google.png"
                  />
                </a>
              </div>
              <div className="kakao-signin">
                <a href="www.kakao.com">
                  <img
                    className="kakao-signin"
                    alt="kakao"
                    src="images/kakao.png"
                  />
                </a>
              </div>
            </article>
          </div>
          <div className="login-link">
            <p>이미 계정을 갖고 계시다구요?</p>
            <a href="www.styleshare.kr">여기서 로그인</a>
          </div>
        </div>
        <footer>
          <div className="privacy-policy">
            <span>StyleShare에 대하여</span>
            <span>개인정보보호정책</span>
            <span>사용약관</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default SignUp;
