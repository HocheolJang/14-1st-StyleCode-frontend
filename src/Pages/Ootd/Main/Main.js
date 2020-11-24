/* eslint-disable no-unused-expressions */
/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import NavbarOotd from '../../../Common/Navbar/NavbarOotd/NavbarOotd';
import CardList from './CardList';
import Modal from './Modal';
import Paginaton from './Pagination';
import './Main.scss';

// const API = "http://10.58.7.150:8000/ootds";
// const API = "http://localhost:3000/data/data.json";

const LIMIT = 5;

class Main extends Component {
  constructor() {
    super();
    this.state = {
      likeBtn: false,
      cards: [],
      getData: "",
      commentData: [],
      modalData: [],
    }
  }
  
  openModal = (data) => {
    this.setState({
      isModal: data,
    })
  }

  closeModal = () => {
    this.setState({
      isModal: false,
      modalData: [],
    })
  }
  
  API = `http://10.58.7.150:8000/ootds?limit=${LIMIT}`;
  componentDidMount() {
    fetch(this.API).then((res) => res.json())
    .then((res) => 
    this.setState({
      cards: res,
      // follower: res[0].follower,
  }))}

  fetchOotd = (e) => {
    const offset = (this.state.cards?.length) / (e.target.dataset.idx * LIMIT);
    fetch(`http://10.58.7.150:8000/ootds?limit=${LIMIT}&offset=${offset}`)
    .then((res) => res.json())
    .then((res) => this.setState({ cards : res}))
  };

  getData = (data) => {
    this.setState({
      getData: data
    })
  }

  commetData = () => {
    this.setState({
      commetData: this.state.getData,
    })
  }

  handleModalData = (data) => {
    // console.log(data);
    this.setState({
      modalData: data,
    })
  }

  render() {
    // console.log(this.state.getData);
    // console.log(this.state.cards?.ootd_list?.contentImg);
    const { cards, isModal, modalData, commentData, getData } = this.state;
    return (
      <>
        <NavbarOotd />
        <div className="mainWrapper">
          <CardList
          commentData={commentData}
          getData={getData}
          isModal={this.openModal}
          modalData={this.handleModalData}
          cardsData={cards}
          handleClickLike={this.handleClickLike}/>
        </div>
        <div>
            <Paginaton 
            onClick={this.fetchOotd}
            dataLength={cards.length}
            limit={LIMIT}
            />
        </div>
        {/* <section class="sidebar">
          <ul class="sidebar_sns">
            <button><svg onClick={this.handleClick} stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="currentColor"></path></svg></button>
          </ul>
        </section> */}

      <div className={isModal ? '' : 'displayNone'}>
        <Modal 
        modalData = {modalData}
        getData = {this.getData}
        commetData = {this.commetData}
        closeModal = {this.closeModal}
        key={cards.id}
        id={cards.id}
        contentImg={cards.ootd_list?.contentImg}
        productImg={cards.ootd_list?.productImg}
        productName={cards.ootd_list?.productName}
        price={cards.ootd_list?.price}
        sale={cards.ootd_list?.sale}
        authorImg={cards.ootd_list?.authorImg}
        author={cards.ootd_list?.author}
        date={cards.ootd_list?.date}
        tagName={cards.ootd_list?.tagName}
        description={cards.ootd_list?.description}
        follower={cards.ootd_list?.follower}
        commentNum={cards.ootd_list?.commentNum}
        share={cards.ootd_list?.share}
        comments={cards.ootd_list?.comments}
        />
      </div>
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