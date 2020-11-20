import React, { Component } from 'react';
import Card from "./Card";
import './CardList.scss';
class CardList extends Component {
  render() {
    const { cardsData, handleClickLike } = this.props;

    return (
      <div className="cardListWrapper">
        <p className="heading">지금의 트렌드</p>
        <div className="cardList">
          {cardsData?.map(contents => {
            return (
                <Card
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
                commentAuthorImg={contents.commentAuthorImg}
                commentAuthor={contents.commentAuthor}
                comment={contents.comments}
                cardsData={cardsData}
                handleClickLike={handleClickLike}
                />
          )}
          )}
        </div>
      </div>
    );
  }
}

export default CardList;