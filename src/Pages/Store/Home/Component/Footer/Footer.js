import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="headerBox">
            <div className="headerBoxLeft">
              <div className="top">
                <span>고객센터</span>
              </div>
              <div className="middle">
                <span>1833-7848</span>
              </div>
              <div className="bottom">
                <p>평일 10:00 ~ 19:00 (점심시간: 12:00 ~ 14:00)</p>
                <p>토/일, 공휴일 휴무</p>
              </div>
            </div>
            <div className="topBoxCenter">
              <div className="top">
                <span>ABOUT US</span>
              </div>
              <div className="bottom">
                <p>회사소개 {">"}</p>
                <p>입점/제휴 문의 {">"}</p>
              </div>
            </div>
            <div className="topBoxRight">
              <div className="iconContainer">
                <span>
                  <Link to="https://www.facebook.com/">
                    <img
                      src="images/icon/facebookLogo.png"
                      alt="페이스북로고"
                    />
                  </Link>
                </span>
                <span>
                  <Link to="https://www.instagram.com/">
                    <img
                      src="images/icon/instagramLogo.png"
                      alt="인스타그램로고"
                    />
                  </Link>
                </span>
                <span>
                  <Link to="https://twitter.com/">
                    <img src="images/icon/twitterLogo.png" alt="트위터로고" />
                  </Link>
                </span>
                <span>
                  <Link to="https://www.youtube.com/">
                    <img src="images/icon/youtubeLogo.png" alt="유튜브로고" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="middleBox0">
            <Link to="#">
              <span>개인정보 처리방침</span>
            </Link>
            <Link to="#">
              <span>이용약관</span>
            </Link>
          </div>
          <div className="middleBox1">
            <div className="buttonContainer">
              <div className="Btn">
                <Link>
                  <span>자주 묻는 질문</span>
                </Link>
              </div>
              <div className="Btn">
                <Link>
                  <img src="images/icon/kakaotalkLogo.png" alt="카카오톡" />
                  <span>카톡 문의</span>
                </Link>
              </div>
            </div>
            <div className="descContainer">
              <p>
                상호명:주식회사 스타일코드 | 사용자 등록번호: 110-81-12345 |
                사용자등록정보 확인
              </p>
              <p>
                통신판매업신고: 제 2020-서울강남-77777호 | 주소: 서울특별시
                강남구 테헤란로 427 위워크타워 10층 | 대표자: 장호철 |
                개인정보책임자: 김민구
              </p>
            </div>
          </div>
          <div className="footerBox">
            <Link>
              <img src="images/icon/escroIcon.png" alt="에스크로이미지" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
