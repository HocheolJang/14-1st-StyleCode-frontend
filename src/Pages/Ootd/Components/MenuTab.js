import React, { Component } from 'react';

class MenuTab extends Component {
  constructor() {
    super();
    this.state={
      currentId: 1,
    }
  }

  handleClick = (id) => {
    this.setState({currentId: id})
  }
  render() {
    console.log(this.state.currentId);
    return (
      <div>
        <ul>
          {MAPPING_MENU.map((menu, idx) => {
            return (
              <li key={idx} className="tab" onClick={() => this.handleChange(idx + 1)}>{menu}</li>
            )
          })}

          {/* <li onClick={() => this.handleClick(1)} className="first">First</li>
          <li onClick={() => this.handleClick(2)} className="second">Second</li>
          <li onClick={() => this.handleClick(3)} className="third">Third</li> */}
        </ul>

        <div className="contents">
          {/* {this.state.currentId === 1 && <First />}
          {this.state.currentId === 2 && <Second />}
          {this.state.currentId === 3 && <Third />} */}
          {/* {MAPPING_OBJ[this.state.currentId]} */}
        </div>
      </div>
    );
  }
}

const MAPPING_MENU = ["First", "Second", "Third"];
// const MAPPING_OBJ = {1: <First />, 2: <Second />, 3: <Third />}
export default MenuTab;