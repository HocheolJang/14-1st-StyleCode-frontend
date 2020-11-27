/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './NavbarBeforeSignIn.scss';
import { withRouter} from "react-router-dom";


class NavbarBeforeSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOotdBorder: false,
      isStoreBorder: true,
      isUnisexBorder: false,
      isHomeBorder: true,
      cartList: [],
    }
  }

  handleClickOotd = (e) => {
      this.setState({
        isOotdBorder: true,
        isStoreBorder: false,
      })
      e.preventDefault();
      this.props.history.push("/ootd");

  }

  handleClickStore = (e) => {
      this.setState({
        isOotdBorder: false,
        isStoreBorder: true,
      })
      e.preventDefault();
      this.props.history.push("/");
  }

  goToHome = () => {
    this.setState({
      isUnisexBorder: false,
      isHomeBorder: true,
    })
    this.props.history.push("/");
  }

  goToUnisex = () => {
    this.setState({
      isUnisexBorder: true,
      isHomeBorder: false,
    })
    this.props.history.push("/categories");
  }
  // this.state.isUnisexBorder ? this.props.history.push("/categories"):"";

  goToLogin = () => {
    this.props.history.push("/Login");
  }

  goToCart = () => {
    fetch("http://10.58.6.106:8000/carts", {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6IndlY29kZSJ9.AH-mLzn_mMLOSE7Kk1p4jM_2CHwXkED1qGJk7H7c1QA",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const cartList = res.product.map((item) => {
          item["isChecked"] = true;
          return item;
        });
        this.setState({
          cartList,
        });
      });
    this.props.history.push("/cart");
  }

  render() {
    console.log(this.state.isUnisexBorder);
    const { isOotdBorder, isStoreBorder, isUnisexBorder, isHomeBorder, cartList } = this.state;
    return (
      <>
      <div className="navBarWrapper">
        <nav className="topNavBar">
          <div className="leftNavBar">
            <a className="navLogo" href="/">
              <img src='/images/navLogo.png'/>
            </a>
            <div className="leftMenuWrapper">
              <ul className="leftMenuList">
                <li value="feed"
                    className="leftMenu">
                  <span  className={isOotdBorder ? "leftMenuOotdAct":"leftMenuOotd"} onClick={this.handleClickOotd}>#OOTD</span>
                </li>
                <li value="feed"
                    className="leftMenu">
                  <span className={isStoreBorder ? "leftMenuStoreAct":"leftMenuStore"} onClick={this.handleClickStore}>STORE</span>
                </li>
              </ul>
            </div>
          </div>

          <form className="searchBar">
            <input
            id="search-keyword"
            name="keyword"
            type="search"
            placeholder="스타일과 상품을 검색해보세요"
             />
          </form>

          <div className="rightNavBar">
            <div className="rightMenuWrapper">
              <ul className="rightMenuList">
                <li>
                  <svg onClick={this.goToCart} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clip-rule="evenodd"></path><path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path></svg>
                  {/* this.state.cartList.length */}
                </li>  
                {/* <li className="loginBox">
                  로그인/회원가입
                </li> */}
              </ul>
              <div className="loginBox" onClick={this.goToLogin}>
                로그인 / 가입
              </div>
            </div>
          </div>

        </nav>
        <nav className="bottomNavBar">
          <ul className="categories">
            <li className={isHomeBorder ? "Home":""} onClick={this.goToHome}>홈</li>
            <li>브랜드</li>
            <li>랭킹</li>
            <li className={isUnisexBorder ? "New":""} onClick={this.goToUnisex}>유니섹스</li>
            <li>여성</li>
            <li>뷰티</li>
            <li>가방잡화</li>
            <li>슈즈</li>
            <li>라이프</li>
            <li>테크</li>

          </ul>
        </nav>
      </div>
    </>
    );
  }
}

export default withRouter(NavbarBeforeSignIn);