import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import Card from "./Card";
import './CardList.scss';
class CardList extends Component {
  constructor() {
    super();
    this.state = {
      isModal: '',
      modalData: [],
    }
  }
  
  handleModal = (data) => {
    this.props.isModal({
      isModal: data,
      getModalInputComment: this.props.getModalInputComment,
    })
  }

  handleModalData = (data) => {
    this.props.modalData({
      modalData: data,
    })
  }

  render() {
    console.log(this.props.getModalInputComment);
    const { cardsData, handleClickLike, commentData, getData } = this.props;
    return (
      <div className="cardListWrapper">
        <p className="heading">지금의 트렌드</p>
        <Masonry
       breakpointCols={5}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
          {cardsData?.map(contents => {
            return (
                <Card
                getData={getData}
                getModalInputComment={this.props.getModalInputComment}
                commentData={commentData}
                isModal={this.handleModal}
                modalData={this.handleModalData}
                key={contents.id}
                id={contents.id}
                contentImg={contents.contentImg}
                productImg={contents.productImg}
                productName={contents.productName}
                price={contents.price}
                sale={contents.sale}
                authorImg={contents.authorImg}
                author={contents.author}
                date={contents.date}
                tagName={contents.tagName}
                description={contents.description}
                follower={contents.follower}
                commentNum={contents.commentNum}
                share={contents.share}
                comments={contents.comments}
                cardsData={cardsData}
                handleClickLike={handleClickLike}
                />
          )}
          )}
                </Masonry>
      </div>

    );
  }
}
export default CardList;