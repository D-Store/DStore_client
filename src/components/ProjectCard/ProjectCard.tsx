import React from "react";
import { ProjectType } from "../../types/project";
import { ProjectCardContainer, ProjectInfo } from "./ProjectCard.style";

interface IProps {
  title: string;
  content: string;
  thumnail: string;
  isSlide: boolean
}

const ProjectCard: React.FC<IProps> = ({ title, content, thumnail , isSlide }) => {
  console.log(isSlide);
  return (
    <ProjectCardContainer isSlide={isSlide} src={"https://static.news.zumst.com/images/51/2017/09/30/14173c29f7eb4509a9face733a4da097.jpg"} >
      <ProjectInfo className="project-info">
        <h1>{title}jj</h1>
        <span>{content}</span>
        <button>바로가기</button>
      </ProjectInfo>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
