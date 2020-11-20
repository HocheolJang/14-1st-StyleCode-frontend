import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";
import "../../../../../Styles/common.scss";
import "../../../../../Styles/reset.scss";

class ProductInfo extends Component {
  render() {
    const { productdetail } = this.props;
    return (
      <div>
        <article className="article-product-detail">
          <div className="article-product-detail-title">
            <span>상품 상세</span>
          </div>
          <div className="article-product-detail-text">
            <p className="text1">스타일코드의 모든 상품은 100% 정품입니다.</p>
            <p className="text2">상담문의: 카카오톡 플러스친구 '스타일쉐어'</p>
            <p className="text3">자세히 보기</p>
          </div>
          <div className="article-product-detail-img-box">
            <img
              className="article-product-detail-img"
              src="images/testImageInProductdetail.jpeg"
              alt="article-product-detail-img"
            ></img>
          </div>
          <div className="article-product-detail-ask">
            <div className="article-product-detail-ask-title">
              <span>상품 문의10</span>
            </div>
            <details>
              <summary>더보기</summary>
              <div className="article-product-detail-ask-write">
                <button>문의 작성하기</button>
              </div>
              <div>
                <span>오늘시키면 언제와욘</span>
              </div>
              <div>
                <span>배송 언제쯤 받을 수 있나요?</span>
              </div>
            </details>
          </div>
          <div className="article-product-detail-delivery">
            <p></p>
          </div>
        </article>
      </div>
    );
  }
}

export default ProductInfo;
