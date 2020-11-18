import React, { Component } from "react";
import "./Login.scss";
import "../../Styles/reset.scss";
import "../../Styles/common.scss";
import facebook from "./images/facebook.png";
import google from "./images/google.png";
import kakao from "./images/kakao.png";
import twitter from "./images/twitter.png";

class Login extends Component {
  render() {
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
                // pattern={"^[a-zA-Z0-9]+@[a-zA-Z0-9]+$"}
                // required={true}
              ></input>
              <div className="forget-id">
                <a href="#" className="forget-id">
                  ID가 기억나지 않으세요?
                </a>
              </div>
              <input
                className="password"
                placeholder="비밀번호를 입력해주세요."
              ></input>
              <div className="forget-password">
                <a href="#" className="forget-password">
                  비밀번호를 잊으셨나요?
                </a>
              </div>
              <button className="login-button">로그인</button>
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
