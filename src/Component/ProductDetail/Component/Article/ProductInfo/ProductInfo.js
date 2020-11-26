import React, { Component } from "react";
import "../../../../ProductDetail/ProductDetail.scss";

class ProductInfo extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      comments: [],
    };
  }

  render() {
    const { productdetail } = this.props;
    console.log(productdetail.articleProductDetailImg);
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
          <div className="article-product-detail-img-title">
            <span>{productdetail?.articleProductDetailImgTitle}</span>
          </div>
          <div className="article-product-detail-img-box">
            <img
              className="article-product-detail-img"
              src={
                productdetail.articleProductDetailImg &&
                productdetail.articleProductDetailImg[0]
              }
              alt="article-product-detail-img"
            ></img>
          </div>
          <div className="article-product-detail-img-box">
            <img
              className="article-product-detail-img"
              src={
                productdetail.articleProductDetailImg &&
                productdetail.articleProductDetailImg[1]
              }
              alt="article-product-detail-img"
            ></img>
          </div>
          <div className="article-product-detail-img-box">
            <img
              className="article-product-detail-img"
              src={
                productdetail.articleProductDetailImg &&
                productdetail.articleProductDetailImg[2]
              }
              alt="article-product-detail-img"
            ></img>
          </div>
          <div className="article-product-detail-ask">
            <div className="article-product-detail-ask-title">
              <span>상품 문의</span>
            </div>
            <details>
              <summary style={{ fontSize: 18, textAlign: "end" }} />
              <div className="article-product-detail-ask-write">
                <button className="article-product-detail-ask-write-button">
                  문의 작성하기
                </button>
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
            <span>배송/교환/환불</span>
          </div>
          <div className="article-product-detail-delivery-info">
            <details>
              <summary style={{ fontSize: 18, textAlign: "end" }} />
              <p>
                <h2>배송 정보</h2>
                <br /> 브랜드 및 제품에 따라 입점 업체 배송과 스타일쉐어 자체
                배송으로 나뉩니다. 입점 업체 배송의 경우 업체마다 개별 배송비가
                부여됩니다. 결제완료 후 약 1~3일 후 출고됩니다. 제주도를 포함한
                도서산간 지역은 추가 배송일과 추가 배송비 입금요청이 있을 수
                있습니다.
                <h2>교환/환불/AS안내/기타</h2>
                <br />
                교환, 환불 및 기타문의는 스타일쉐어 고객센터 1833-8879으로
                문의주셔야 합니다. 단순변심으로 인한 교환/환불인 경우 반송비를
                입금해주셔야 합니다. 상품 불량인 경우는 배송비를 포함한 전액이
                환불됩니다. 교환/환불시 입점업체 상품의 경우 각 업체에 따라
                반송비용이 다를 수 있습니다. 상품 수령일로부터 7일 이내
                반품/환불 접수 가능합니다. 단순변심 반품의 경우 제품 및 포장
                상태가 재판매 가능하여야 합니다. 출고 이후 환불요청 시 상품 회수
                후 처리됩니다. 화면상의 사진과 제품의 색상은 개인 환경에 따라
                다소 차이가 있을 수 있으며 미세한 색상, 주름등의 차이는 제품
                이상으로 인한 반품 사유가 되지 않습니다. (주)스타일쉐어는
                통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
                (주)스타일쉐어는 상품·거래정보 및 거래에 대하여 책임을 지지
                않습니다. <h2>고시정보</h2> <br /> A/S 책임자와 전화번호:
                스타일쉐어 고객센터: 1833-8879 색상: 상세설명참조 세탁방법 및
                취급시 주의사항: 상세설명참조 제조국: 상세설명참조 제조연월:
                상세설명참조 제조자: 상세설명참조 제품 소재: 상세설명참조 치수:
                상세설명참조 품질보증기준: 상세설명참조
              </p>
            </details>
          </div>
        </article>
      </div>
    );
  }
}

export default ProductInfo;
