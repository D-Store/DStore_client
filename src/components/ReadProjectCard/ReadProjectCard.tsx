import React from "react";
import {
  ReadProjectCardContainer,
  ReadProjectCardHeader,
  ReadProjectCardHighLight,
  ReadProjectCardImgList,
} from "./ReadProjectCard.style";
import { setUrl } from "../../lib/setUrl";
import { ProjectType } from "../../types/project";

const ReadProjectCard: React.FC = () => {
  return (
    <ReadProjectCardContainer>
      <ReadProjectCardHeader>
        <div className="category">카테고리</div>
        <div className="profile">
          <span className="profileImg"></span>
          <span className="profileName">이름이름이름이름이름이름</span>
        </div>
        <h1 className="title">
          제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
        </h1>
        <div className="info">
          <span className="like">좋아요 6</span>
          <span className="timeLine">2021.6.1 00.00</span>
          <span className="review">리뷰 1</span>
        </div>
      </ReadProjectCardHeader>
      <ReadProjectCardHighLight>
        <div className="titleImg" />
        <ReadProjectCardImgList>
          <div className="ListImg select" />
          <div className="ListImg" />
          <div className="ListImg" />
          <div className="ListImg" />
          <div className="ListImg" />
          <div className="ListImg" />
        </ReadProjectCardImgList>
      </ReadProjectCardHighLight>
    </ReadProjectCardContainer>
  );
};

export default ReadProjectCard;
