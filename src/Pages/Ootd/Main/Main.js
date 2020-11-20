import React, { Component } from 'react';
import NavbarOotd from '../../../Common/Navbar/NavbarOotd/NavbarOotd';
import CardList from './CardList';
import './Main.scss';

const API = "http://localhost:3000/data/data.json";

class Main extends Component {
  state = {
    likeBtn: false,
    cards: [],
    follower: "",
  }

  handleClickLike = () => {
    if(this.state.likeBtn === false){
      this.setState({
      likeBtn: true,
      follower: this.state.follower + 1,
      })
    } else {
      this.setState({likeBtn: false,
      follower: this.state.follower - 1,
      })
    }
  }
  
  componentDidMount() {
    fetch(API).then((res) => res.json()).then((res) => this.setState({
      cards: res,
  }))}

  render() {

    const { cards } = this.state;
    return (
      <>
        <NavbarOotd />
        <div className="mainWrapper">
          <CardList
          cardsData={cards}
          handleClickLike={this.handleClickLike}/>
        </div>

        <header class="sidebar">
          <ul class="sidebar_sns">
            <button><svg onClick={this.handleClick} stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="currentColor"></path></svg></button>
          </ul>
        </header>
      </>
    );
  }
}

export default Main;

  // // handleClick = () => {
  //   componentDidMount() {
  //     // console.log("ok");
  //     fetch(API, {
  //       method: "GET",
  //       // body: JSON.stringify({
  //       //   ootd_id: "1",
  //       // })
  //     }).then((res) => res.json()).then((res) => this.setState({
  //       cards: res,
  //     // }
      
  //   }))}
  // // }

  // handleClickLike = () => {
  //   // fetch(this.API, {
  //   //   method: "POST",
  //   //   body: JSON.stringify({
  //   //     ootd_id: "1",
  //   //     user_id: "1",
  //   //   }),
  //   // }).then((response) => {return response.json()}).then((result) => {
  //   //       console.log("백엔드에서 오는 응답메시지:" + result);
  //         if(this.state.likeBtn === false){
  //           this.setState({
  //           likeBtn: true,
  //           follower: this.state.follower + 1,
  //         })} else {
  //           this.setState({likeBtn: false,
  //           follower: this.state.follower - 1,
  //           })}
  //       // })
  // }