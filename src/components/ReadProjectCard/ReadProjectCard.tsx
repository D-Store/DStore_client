import React, { useEffect } from "react";
import {
  ReadProjectCardContainer,
  ReadProjectCardHeader,
  ReadProjectCardHighLight,
  ReadProjectCardImgList,
} from "./ReadProjectCard.style";
import { setUrl } from "../../lib/setUrl";
import { ProjectType } from "../../types/project";
import timeCounting from "time-counting";

interface IProps {
  project: ProjectType;
}

const ReadProjectCard: React.FC<IProps> = ({ project }) => {
  const {
    id,
    tags,
    content,
    createAt,
    title,
    users,
    likeNum,
    commentNum,
    files,
  } = project;

  const mapTags = tags && tags.map((tag) => <li>{tag}</li>);
  let titleKey = 0;

  const mapFiles =
    files &&
    files.map((file, key) => {
      console.log(file.fileLocation);
      return (
        <img
          src={setUrl(file.fileLocation)}
          alt={`${file.id}`}
          className={`ListImg ${key === titleKey && "select"}`}
        />
      );
    });

  const TitleFile = () => {
    return (
      <img
        src={setUrl(files[titleKey].fileLocation)}
        alt={`${files[titleKey].id}`}
        className="titleImg"
      />
    );
  };

  return (
    <ReadProjectCardContainer>
      <ReadProjectCardHeader>
        <div className="category">{mapTags}</div>
        <div className="profile">
          <span className="profileImg"></span>
          <span className="profileName">{title}</span>
        </div>
        <h1 className="title">{title}</h1>
        <div className="info">
          <span className="like">좋아요 {likeNum}</span>
          <span className="timeLine">
            {timeCounting(createAt, {
              lang: "ko",
            })}
          </span>
          <span className="review">리뷰 {commentNum}</span>
        </div>
      </ReadProjectCardHeader>
      {/* <img src={mainPhoto.fileLocation} alt="" /> */}

      <ReadProjectCardHighLight>
        <TitleFile />
        <ReadProjectCardImgList>
          {mapFiles}
          <div className="ListImg" />
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
