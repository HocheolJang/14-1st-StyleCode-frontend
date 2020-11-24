import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonNumbers: [],
      dataLength: this.props.dataLength,
      limit: this.props.limit
    }
  }

  // buttonNumbers = {
  //   for(let i=1; i < {dataLength}/{limit}; i++) {
  //     return i;
  //   }
  // }

  render() {
    const { dataLength, limit, buttonNumbers } = this.state;


    return (
      <ul>
        {buttonNumbers.map((el) => {
          el.preventDefault();
          return (
          <li><button>{el}</button></li>
          );
        })
      }
      </ul>
    );
  }
}

export default Pagination;