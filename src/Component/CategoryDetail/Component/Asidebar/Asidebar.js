import React, { Component } from "react";
import "./Asidebar.scss";
import { asidebarAPI } from "../../../../config";

class Asidedbar extends Component {
  constructor() {
    super();
    this.state = {
      sidebarCategoryList: [],
      hiddenDropdown: true,
    };
  }

  componentDidMount() {
    fetch(`${asidebarAPI}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          sidebarCategoryList: res.categories,
        });
      });
  }

  // showFilterDropdown = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     showDropdown: true,
  //   });
  // };

  showDropdown = (e) => {
    e.preventDefault();
    this.setState({ hiddenDropdown: !this.state.hiddenDropdown });
  };

  render() {
    const { sidebarCategoryList, hiddenDropdown } = this.state;
    const { showDropdown } = this;
    return (
      <div className="asideContainer">
        <div className="categoriesList">
          <ul>
            {sidebarCategoryList.map((category, idx) => {
              return (
                <li
                  key={idx}
                  onClick={showDropdown}
                  id={category.id}
                  // onMouseOver={filterDropdown}
                  // onMouseOut={!filterDropdown}
                >
                  {category.categoryName}

                  {/* <div className="filter">
                    {showDropdown ? (
                      <div className="showFilterDropDown">
                        <ul className="dropdownContent">
                          {sidebarCategoryList.map((category, idx) => {
                            const subCategoriesList = [
                              ...this.state.sidebarCategoryList,
                            ];
                            console.log(subCategoriesList);
                            return (
                              <li
                                key={idx}
                                onClick={showFilterDropdown}
                                // onMouseOver={filterDropdown}
                                // onMouseOut={!filterDropdown}
                              >
                                {category.categoryName}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : null}
                  </div> */}
                </li>
              );
            })}
          </ul>
          {showDropdown ? (
            <div className={hiddenDropdown ? "active" : ""}>
              <ul>
                <li>반팔 티셔츠</li>
                <li>긴팔 티셔츠</li>
                <li>슬리브리스</li>
                <li>피케 티셔츠</li>
                <li>터틀넥 티셔츠</li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Asidedbar;
