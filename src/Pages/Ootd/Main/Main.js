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
      loader={<div className="loader" key={0} />}
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