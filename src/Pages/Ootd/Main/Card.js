/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import '../../../Styles/common.scss';
import '../../../Styles/reset.scss';
import "./Card.scss";

class Card extends Component {
  follower = this.props.follower;
  constructor(props) {
    super(props);
    this.state = {
      likeBtn: false,
      follower: this.follower,
      display: false,
    }
  }
  
  // handleMouseOver = () => {
  //   if(this.state.display === false){
  //     this.setState({
  //     display: true,
  //   })} else {
  //     this.setState({
  //     display: false,
  //     })}
  // }

  // handleClickLike = {this.props.handleClickLike}
  handleClickLike = () => {
    if(this.state.likeBtn === false){
      this.setState({
      likeBtn: true,
      follower: this.state.follower + 1,
    })} else {
      this.setState({likeBtn: false,
      follower: this.state.follower - 1,
      })}
  }

  render() {
    console.log(this.props.handleClickLike);
    const { likeBtn, display } = this.state;
    const { id, contentImg, productImg, productName, price, sale, authorImg, author,
            date, tagName, description, follower, commentNum, share, commentAuthorImg,
            commentAuthor, comment, handleClickLike } = this.props;
    return (
        <div className="contents">
          <div className="contentImgContainer">
            <img className="contentImg" mouse={this.handleMouseOver} src={contentImg} alt="ootdCard" />
            <ul className={!display ? "optionContainer":"handleOptionContainer"} >
              <li><svg className={!likeBtn ? "dislike":"like"} onClick={this.handleClickLike} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path><path d="M679.7 201c-73.1 0-136.5 40.8-167.7 100.4C480.8 241.8 417.4 201 344.3 201c-104 0-188.3 82.6-188.3 184.5 0 201.2 356 429.3 356 429.3s356-228.1 356-429.3C868 283.6 783.7 201 679.7 201z"></path></svg></li>
              <li><svg className="comment" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path></svg></li>
              <li><svg className="share" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg></li>
              <li><svg className="more" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></li>
            </ul>
            <svg className="someImg" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path></svg>
            
          </div>
          <div className="contentTextWrapper">
          <div className="contentText">
            <div className="productWrapper">
             <div className="productSale">{parseInt(sale*100)}%</div>
              <img className="productImg" src={productImg}/>
              <div className="productInfoWrapper">
                <div className="productInfo">
                  <p className="productName">{productName}</p>
                  <p className="priceWrapper">
                    <span className="price">{price-price*sale}원</span>
                    <span className="originPrice">{price}원</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="authorWrapper">
            <figure className="authorImgWrapper">
              <img className="authorImg" src={authorImg} />
            </figure>
            <div className="authorInfoWrapper">
              <div className="authorInfo">
                <span className="author">{author}</span>
                <span className="uploadDate">{date}</span>
              </div>
              <div className="authorDescription">
                <span>{description}</span>
                <span>{tagName}</span>
              </div>
              <div className="authorPopularity">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" clip-rule="evenodd"></path></svg>
                <span classNum="likeNum">{this.state.follower}</span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path></svg>
                <span className="commentNum">{commentNum}</span>
                <svg className="share" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                <span className="shareNum">{share}</span>
              </div>           
            </div>
          </div>
          </div>
          <div>
            {commentAuthorImg}
            {commentAuthor}
            {comment}
          </div>
        </div>
    );
  }
}

export default Card;