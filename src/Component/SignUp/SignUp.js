import React, { Component } from "react";
import "./SignUp.scss";
import "../../Styles/reset.scss";
import "../../Styles/common.scss";
import facebook from "../Login/images/facebook.png";
import google from "../Login/images/google.png";
import kakao from "../Login/images/kakao.png";
import twitter from "../Login/images/twitter.png";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      password: "",
      checkpassword: "",
    };
  }
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
    e.preventDefault();
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

  render() {
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
                onClick={this.checkValidation}
                onKeyup={this.checkValidation}
              >
                가입
              </button>
            </article>
            <article className="social-login">
              <div className="facebook-signin">
                <a href="www.facebook.com">
                  <img src={facebook} className="facebook-signin" />
                </a>
              </div>
              <div className="twitter-signin">
                <a href="www.twitter.com">
                  <img src={twitter} className="twitter-signin" />
                </a>
              </div>
              <div className="google-signin">
                <a href="www.google.com">
                  <img src={google} className="google-signin" />
                </a>
              </div>
              <div className="kakao-signin">
                <a href="www.kakao.com">
                  <img src={kakao} className="kakao-signin" />
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
