import Link from "next/link";
import React from "react";
import { ProjectType } from "../../types/project";
import { ProjectCardContainer, ProjectInfo } from "./ProjectCard.style";

interface IProps {
  id: number;
  title: string;
  content: string;
  thumnail: string;
  isSlide: boolean;
}

const ProjectCard: React.FC<IProps> = ({
  id,
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
        <Link href={`project/${id}`}>
          <a>바로가기</a>
        </Link>
      </ProjectInfo>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
