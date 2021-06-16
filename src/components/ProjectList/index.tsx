import { ProjectContainer } from "./styles";
import { VFC } from "react";
import { ProjectType } from "typings/db";
import ProjectCard from "components/ProjectCard";

interface Props {
  title?: string;
  subTitle?: string;
  projects: ProjectType[];
}

const ProjectList: VFC<Props> = ({ subTitle, title, projects }) => {
  return (
    <>
      <ProjectContainer>
        <div className="projects-headers">
          <h1>{title}</h1>
          <span>{subTitle}</span>
        </div>
        <div className="projects-list">
          {projects?.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </ProjectContainer>
    </>
  );
};

export default ProjectList;
