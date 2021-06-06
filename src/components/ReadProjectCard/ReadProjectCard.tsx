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

  const mapFiles =
    files &&
    files.map((file) => {
      console.log(file.fileLocation);
      return (
        <img src={setUrl("http://" + file.fileLocation)} alt={`${file.id}`} />
      );
    });

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
      {mapFiles}
      {/* <img src={mainPhoto.fileLocation} alt="" /> */}

      {/* <ReadProjectCardHighLight>
        <div className="titleImg" />
        <ReadProjectCardImgList>
          <div className="ListImg select" />
          <div className="ListImg" />
          <div className="ListImg" />
          <div className="ListImg" />
          <div className="ListImg" />
          <div className="ListImg" />
        </ReadProjectCardImgList>
      </ReadProjectCardHighLight> */}
    </ReadProjectCardContainer>
  );
};

export default ReadProjectCard;
