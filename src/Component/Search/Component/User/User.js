import React, { Component } from "react";
import "./User.scss";

class User extends Component {
  render() {
    const { usersList } = this.props;
    console.log(usersList);

    return (
      <div className="user">
        {usersList?.map((user, idx) => {
          return (
            <div className="container" key={idx}>
              <div className="profileImgBox">
                <img src={user?.user_image} alt="프로필 사진" />
              </div>
              <div className="profileNameBox">
                <p>{user?.user_nickname}</p>
                <p>{user?.description}</p>
              </div>
              <div className="followBtnBox">
                <button>팔로우</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default User;
