/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import NavbarOotd from '../../../Common/Navbar/NavbarOotd';
import CardList from './CardList';
import './Main.scss';

class Main extends Component {
  state = {
    cards: [],
  }
  API = "http://localhost:3000/data/data.json";
  componentDidMount() {
    fetch(this.API)
    .then((res) => res.json())
    .then((res) => this.setState({
      cards: res,
    }))
  }

  render() {
    const { cards } = this.state;
    return (
      <>
        <NavbarOotd />
        <div className="mainWrapper">
          <p className="heading">NOW TRENDING</p>
          <CardList
          cardsData={cards}/>
        </div>

        <header class="sidebar">
          <ul class="sidebar_sns">
            <li><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="currentColor"></path></svg></li>
          </ul>
        </header>
      </>
    );
  }
}

export default Main;