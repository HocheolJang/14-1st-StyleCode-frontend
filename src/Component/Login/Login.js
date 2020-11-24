import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Login.scss";
import "../../Styles/reset.scss";
import "../../Styles/common.scss";

class Login extends Component {
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
    fetch("http://10.58.0.175:8000/users/login", {
      method: "POST",
      body: JSON.stringify({
        login_id: this.state.id,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("결과", result.token);
        if (result.token) {
          localStorage.setItem("token", result.token);
          this.props.history.push("/");
        }
      });
  };

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
    const { id, password } = this.state;
    const checkId = id.includes("");
    const checkPw = password.length >= 6;
    if (checkId && checkPw) {
      alert("로그인성공");
    }
    if (!checkId) {
      alert("ID는 @를 포함해야 합니다.");
    }
    if (!checkPw) {
      alert("비밀번호는 6자리 이상입니다.");
    }
  };

  render() {
    console.log(this.state.id, this.state.password);
    return (
      <div className="Login">
        <div className="main">
          <header>
            <div className="section-logo">StyleCode</div>
            <div className="section-sign">로그인</div>
          </header>
          <div className="section">
            <article className="login-information">
              <input
                className="id"
                placeholder="ID/EMAIL"
                type="text"
                value={this.state.id}
                onChange={this.handleIDChange}
              ></input>
              <div className="forget-id">
                <Link to="#" className="forget-id">
                  ID가 기억나지 않으세요?
                </Link>
              </div>
              <input
                className="password"
                placeholder="비밀번호를 입력해주세요."
                type="password"
                value={this.state.password}
                onChange={this.handlePWChange}
              ></input>
              <div className="forget-password">
                <Link to="#" className="forget-password">
                  비밀번호를 잊으셨나요?
                </Link>
              </div>
              <button
                className="login-button"
                onClick={() => {
                  this.checkValidation();
                  this.handleClick();
                }}
                onKeyup={this.checkValidation}
              >
                로그인
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
            <p>ID가 없으세요?</p>
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

export default Login;
