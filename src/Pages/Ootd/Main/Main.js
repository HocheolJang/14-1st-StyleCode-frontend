import React, { Component } from 'react';
import NavbarOotd from '../../../Common/Navbar/NavbarOotd/NavbarOotd';
import CardList from './CardList';
import Modal from './Modal';
import InfiniteScroll from 'react-infinite-scroller';
import './Main.scss';

const API = "http://192.168.219.101:8000";
const LIMIT = 10;
class Main extends Component {
  constructor() {
    super();
    this.state = {
      likeBtn: false,
      cards: [],
      getData: "",
      commentData: [],
      modalData: [],
      offSet: 0,
      isLoading: false,
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
  
  componentDidMount() {
    window.addEventListener("scroll", this.infiniteScroll);
    fetch(`${API}/ootds?offset=${this.state.offSet}&limit=${LIMIT}`)
    .then((res) => res.json())
    .then((res) => 
    this.setState({
      cards: res.ootd_list,
      offSet: this.state.offSet + LIMIT,
    })
  )
  }

  loadFunc = () => {
    fetch(`${API}/ootds?offset=${this.state.offSet}&limit=${LIMIT}`)
    .then((res) => res.json())
    .then((res) => {
      this.setState({
      cards: [...this.state.cards, ...res.ootd_list],
      offSet: this.state.offSet + LIMIT,
    });
    })
  }

  getData = (data) => {
    this.setState({
      getData: data
    })
  }

  modalData = () => {
    this.setState({
      commentData: this.state.getData,
    })
  }

  handleModalData = (data) => {
    this.setState({
      modalData: data,
    })
  }

  render() {
    const { cards, isModal, modalData, commentData, getData } = this.state;
    return (

      <div style={{height:"935px",overflow:"auto"}}>
    <InfiniteScroll
      pageStart={0}
      loadMore={this.loadFunc}
      hasMore={true || false}
      loader={<div className="loader" key={0}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 11H7V13H2zM17 11H22V13H17zM11 17H13V22H11zM11 2H13V7H11z"></path><path transform="rotate(-45.001 6.697 6.697)" d="M5.697 4.197H7.697V9.197H5.697z"></path><path transform="rotate(134.999 17.303 17.303)" d="M16.303 14.803H18.303V19.803H16.303z"></path><path transform="rotate(45.001 6.697 17.303)" d="M5.697 14.803H7.697V19.803H5.697z"></path><path transform="rotate(-44.992 17.303 6.697)" d="M14.803 5.697H19.803V7.697H14.803z"></path></svg></div>}
      useWindow={false}
    >
      <NavbarOotd />
      <div className="mainWrapper">
        <CardList
        key={cards.id}
        commentData={commentData}
        getModalInputComment={getData}
        isModal={this.openModal}
        modalData={this.handleModalData}
        cardsData={cards}
        handleClickLike={this.handleClickLike}/>
      </div>
      <div>
        <div className="infiniteScrollTarget">
          <input type="text" alt="target" value="target"></input>
        </div>
      </div>
      <div className={isModal ? '' : 'displayNone'}>
        <Modal 
        modalData = {modalData}
        getData = {this.getData}
        commentData = {this.commetData}
        closeModal = {this.closeModal}
        key={cards.id}
        id={cards.id}
        contentImg={cards?.contentImg}
        productImg={cards?.productImg}
        productName={cards?.productName}
        price={cards?.price}
        sale={cards?.sale}
        authorImg={cards?.authorImg}
        author={cards?.author}
        date={cards?.date}
        tagName={cards?.tagName}
        description={cards?.description}
        follower={cards?.follower}
        commentNum={cards?.commentNum}
        share={cards?.share}
        comments={cards?.comments}
        />
      </div>
    </InfiniteScroll>
</div>
    )}
}
export default Main;