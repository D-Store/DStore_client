import React from "react";
import { ProjectDetailImageContainer } from "./ProjectDetailImage.style";

const ProjectDetailImage = () => {
  return (
    <ProjectDetailImageContainer>
      <div className="header-meta">
        <div className="project-meta">
          <span>카테고리</span>
          <h1>프로젝트 이름</h1>
        </div>
        <div className="writer-meta">
          <div className="profile">
            <img src="" alt="" /> <span className="name">이름</span>
          </div>
          <span className="project-info">
            <div className="likes">좋아요 : {0}</div>
            <div className="created_at">yyyy.mm.dd hh.mm</div>
            <div className="comments">댓글 : {0}</div>
          </span>
        </div>
      </div>
    </ProjectDetailImageContainer>
  );
};

export default ProjectDetailImage;
