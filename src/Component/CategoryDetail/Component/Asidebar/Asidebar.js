import React, { Component } from "react";
import { Link } from "react-router-dom";
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

  render() {
    const { sidebarCategoryList } = this.state;
    const {
      activeSecondCategory,
      showDropdown,
      hiddenDropdown,
      hideDropdown,
    } = this.props;

    return (
      <div className="asideContainer">
        <div className="categoriesList">
          <ul>
            {sidebarCategoryList.map((category, idx) => {
              return (
                <Link to="/productDetail">
                  <li
                    data-idx={idx}
                    key={idx}
                    onMouseOver={showDropdown}
                    onMouseOut={hideDropdown}
                    // onClick={() => history.push("/tshirt")}
                    id={category.id}
                    className={activeSecondCategory === idx ? "active" : ""}
                  >
                    {category.categoryName}
                  </li>
                </Link>
              );
            })}
            {/* {hiddenDropdown ? (
              <div className={hiddenDropdown ? "activeDropDown" : ""}>
                <ul>
                  <li>반팔 티셔츠</li>
                  <li>긴팔 티셔츠</li>
                  <li>슬리브리스</li>
                  <li>피케 티셔츠</li>
                  <li>터틀넥 티셔츠</li>
                </ul>
              </div>
            ) : null} */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Asidedbar;
