import React, { Component } from 'react';
import Card from "./Card";
import './CardList.scss';
class CardList extends Component {
  render() {
    const { cardsData} = this.props;

    return (
      <div className="cardListWrapper">
        <div className="cardList">
          {cardsData && cardsData.map(contents => {
            return (
              <Card
                key={contents.id}
                id={contents.id}
                username={contents.username}
                content={contents.company.name} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardList;