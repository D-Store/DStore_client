import { ProjectContainer } from "./styles";
import { VFC } from "react";
import { ProjectType } from "typings/db";
import ProjectCard from "components/ProjectCard";

interface Props {
  title?: string;
  subTitle?: string;
  projects: ProjectType[];
  serchValue?: string;
}

const ProjectList: VFC<Props> = ({ subTitle, title, projects, serchValue }) => {
  return (
    <>
      <ProjectContainer>
        <div className="projects-headers">
          <h1>{title}</h1>
          <span>{subTitle}</span>
        </div>
        <div className="projects-list">
          {serchValue
            ? projects
                .filter(
                  project =>
                    (typeof project.title === "string" &&
                      project.title.includes(serchValue)) ||
                    (project.tags &&
                      project.tags
                        .map(tag => {
                          return tag;
                        })
                        .includes(serchValue))
                )
                .map(project => {
                  console.log(
                    project.tags.map(tag => {
                      return tag;
                    })
                  );
                  return <ProjectCard project={project} key={project.id} />;
                })
            : projects?.map(project => (
                <ProjectCard project={project} key={project.id} />
              ))}
        </div>
      </ProjectContainer>
    </>
  );
};

export default ProjectList;
