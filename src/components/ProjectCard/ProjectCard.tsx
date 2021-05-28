import React from "react";
import { ProjectType } from "../../types/project";
import { ProjectCardContainer, ProjectInfo } from "./ProjectCard.style";

interface IProps {
  title: string;
  content: string;
  thumnail: string;
  isSlide: boolean;
}

const ProjectCard: React.FC<IProps> = ({
  title,
  content,
  thumnail,
  isSlide,
}) => {
  return (
    <ProjectCardContainer isSlide={isSlide} src={thumnail}>
      <ProjectInfo className="project-info">
        <h1>{title}</h1>
        <span>{content}</span>
        <button>바로가기</button>
      </ProjectInfo>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
