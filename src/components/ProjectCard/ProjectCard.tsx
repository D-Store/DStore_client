import React from "react";
import { ProjectType } from "../../types/project";
import { ProjectCardContainer, ProjectInfo } from "./ProjectCard.style";

const ProjectCard: React.FC<ProjectType> = ({ title, content, files }) => {
  const fakeMainThumnail = "http://img.woowahan.com/www/common/baemin.jpg";
  //   const mainThumnail = files[0].fileLocation;

  const fakeTitle = "배달의 민족";
  const fakeDesc =
    "좋은 음식을 먹고싶은 곳에서 [배달의 민족]좋은 음식을 먹고싶은 곳에서 [배달의 민족]좋은 음식을 먹고싶은 곳에서 [배달의 민족]";

  return (
    <ProjectCardContainer src={fakeMainThumnail}>
      <ProjectInfo className="project-info">
        <h1>{fakeTitle}</h1>
        <span>{fakeDesc}</span>
      </ProjectInfo>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
