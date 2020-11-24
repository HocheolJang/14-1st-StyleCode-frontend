/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Comment from './Comment';
import '../../../Styles/common.scss';
import '../../../Styles/reset.scss';
import './Modal.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followBtn: false,
      comment: "",
      comments:[],
    }
  }
  num = 0;
  // imagesDetailView = () => {
  // }

  // componentDidMount()

  followBtnActive = () => {
    if(this.state.followBtn) {
      this.setState({
        followBtn: false
      })
    } else {
      this.setState({
        followBtn: true
      })
    }
    }

  getData = (e) => {
  e.preventDefault();

    this.setState({
      comment: e.target.value,
    })
    // this.props.getData({
    //   getData: this.state.comment,
    // })
  }

  handleKeyPress = (e) => {
    e.preventDefault();

    if(e.key === "Enter") {
      if(!this.state.comment) {
        e.preventDefault();
      } else {
        this.handleComment();
      }
    }
  }

  handleComment = (e) => {
    e.preventDefault();
    const { comment, comments } = this.state;
    comments.push({comment});
      // comments: this.state.comments.concat({
      //   num: this.num,
      //   comment: this.state.comment,
      // }),
      this.setState({
      comment: ""
    });
    this.num += 1;
  }

  render() {
    // console.log(this.state.getData?.d);
    // console.log(this.props.match.params);

    // console.log(this.props.modalData?.modalData?.modalData?.comments[0].commentAuthorImg);
    const { closeModal, id, follower, handleClickLike, modalData } = this.props;
    const { followBtn, comments } = this.state;
    
  return (
    <>
      <div className="modalWrapper" onClick={closeModal}>
        <div className="innerWrapper" onClick={(e) => e.stopPropagation()}>
          <div className="leftWrapper">
            <div className="imgWrapper">
              <img className="image" src={modalData?.modalData?.modalData?.contentImg} />
              <div className={modalData?.modalData?.modalData?.contentImg?.length > 1 ? "smallImages" : "displayNone"}>
                <figure className="smallImagesWrapper"><img className="smallImage" src={modalData?.modalData?.modalData?.contentImg[0]} /></figure>
                <figure className="smallImagesWrapper"><img className="smallImage" src={modalData?.modalData?.modalData?.contentImg[1]} /></figure>
                {/* <figure className="smallImagesWrapper"><img className="smallImage" src={modalData?.modalData?.modalData?.contentImg} /></figure> */}
              </div>
            </div>
          </div>
          
          <div className="rightWrapper">
            <div className="information">
              <div className="commentData">
                <div className="commentUserImgWrapper">
                  <img className="commentUserImg" src={modalData?.modalData?.modalData?.authorImg} width="40" height="40" />
                </div>
                <div className="authorInfomation">
                  <div className="author">{modalData?.modalData?.modalData?.author}</div>
                  <div className="introduction">{modalData?.modalData?.modalData?.datetime}</div>
                </div>
                <div className="followBtnBox" >
                  <svg className={followBtn? "followBtnActive":"followBtn"} onClick={this.followBtnActive} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 14.062V22H4a8 8 0 0 1 9-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm5.793 6.914l3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414 2.12 2.121z"></path></g></svg>
                </div>
              </div>
              <div className="authorDescription">
                <span>{modalData?.modalData?.modalData?.description}</span>
                {/* <span>{tagName}</span> */}
              </div>
            </div>

            <div className="authorPopularity">
              <div className="likeBox">
                <svg className="like" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" clip-rule="evenodd"></path></svg>
              </div>
              <div className="likeNumBox">
                <span classNum="likeNum">{modalData?.modalData?.modalData?.follower}</span>
              </div>
              <div className="shareBox">
                <svg className="share" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
              </div>
              <div className="optionBox">
                <svg className="option" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"></path></svg>
              </div>
            </div> 

            <div className="commentWrapper">
              <div className="commentNum"><span>댓글({modalData?.modalData?.modalData?.commentNum})</span></div>
               <div className="commentUserImgWrapper" key={id}>
                      <img className="commentUserImg" width="30px" height="30px" src={modalData?.modalData?.modalData?.comments[1].commentAuthorImg} />
                    </div>
                      <div className="commentContentWrapper" key={id}>
                        <span className="commentUser">{modalData?.modalData?.modalData?.comments[1].commentAuthor}</span>
                        <span className="commentContent">{modalData?.modalData?.modalData?.comments[1].comment}</span>
                      </div>
                      <div className="commentBtnWrapper" key={id}>
                        <span className="commentDate">{modalData?.modalData?.modalData?.comments[1].datetime}</span>
                        <span className="commentBtn"> 답글 달기 </span>
                      </div>

                  <div className={modalData?.modalData?.modalData?.comment? "commentData":"commentNone"}>
                    {comments.map((commentText) => {
                      return (
                        <>
                    <div className="commentUserImgWrapper" key={commentText.num}>
                      <img className="commentUserImg" width="30px" height="30px" src={modalData?.modalData?.modalData?.comments[2].commentAuthorImg} />
                    </div>
                      <div className="commentContentWrapper" key={commentText.num}>
                        <span className="commentUser">{modalData?.modalData?.modalData?.comments[2].commentAuthor}</span>
                        <span className="commentContent">{commentText.comment}</span>
                      </div>
                      <div className="commentBtnWrapper" key={commentText.num}>
                        <span className="commentDate">{modalData?.modalData?.modalData?.comments[2].datetime}</span>
                        <span className="commentBtn"> 답글 달기 </span>
                      </div>
                        </>
                      );
                    })}
                    
                  </div>
                  {/* <Comment 
                  commentAuthorImg={commentAuthorImg}
                  commentAutor={commentAuthor}
                  comment={comment}
                  date={date}
                  /> */}
              <form className="inputWrapper" onSubmit={this.handleComment}>
                <input type="text" placeholder="댓글을 남기세요..."
                onChange={this.getData}
                onKeyUp={this.handleKeyPress}
                value={this.state.comment} />
              
              {/* <div><submit type="button" value="버튼" onClick={this.props.commentData} /></div> */}
              </form>
            </div>
          </div>
            


        </div>
      </div>
    </>
  )}
}
export default Modal;