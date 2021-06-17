import { Link } from "react-router-dom";
import { ProjectCardContainer, ProjectInfo, Tag } from "./styles";
import { ProjectType } from "typings/db";
import { VFC } from "react";

interface Props {
  project: ProjectType;
}

const ProjectCard: VFC<Props> = ({ project }) => {
  const mapTags = project.tags?.map((tag: string, index: number) => (
    <Tag key={tag}>#{tag}</Tag>
  ));

  return (
    <ProjectCardContainer imgSrc={project.mainPhoto.fileLocation}>
      <ProjectInfo className="project-info">
        <h1>{project.title}</h1>
        <span className="content">{project.content}</span>
        <div className="tags">{mapTags}</div>
        {project.likeState && <span className="like">좋아요 한 프로젝트</span>}
        <Link to={`/template/project/${project.id}`}>바로가기</Link>
      </ProjectInfo>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
