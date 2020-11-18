import React, { Component } from "react";

class Birthdata extends Component {
  constructor(props) {
    super(props);
    this.props = {
      year: [
        { key: 1, value: "1990" },
        { key: 2, value: "1991" },
        { key: 3, value: "1992" },
        { key: 4, value: "1993" },
        { key: 5, value: "1994" },
        { key: 6, value: "1995" },
      ],
    };
  }

  render() {
    return <div></div>;
  }
}

export default Birthdata;
