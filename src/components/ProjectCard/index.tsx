import { Link } from "react-router-dom";
import { ProjectCardContainer, ProjectInfo } from "./styles";
import { ProjectType } from "typings/db";
import { VFC } from "react";

interface Props {
  project: ProjectType;
}

const ProjectCard: VFC<Props> = ({ project }) => {
  return (
    <ProjectCardContainer imgSrc={project.mainPhoto.fileLocation}>
      <ProjectInfo className="project-info">
        <h1>{project.title}</h1>
        <span>{project.content}</span>
        <Link to={`/template/project/${project.id}`}>바로가기</Link>
      </ProjectInfo>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
