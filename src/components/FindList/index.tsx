import React, { FC } from "react";
import { setUrl } from "../../lib/setUrl";
import { ProjectType } from "../../types/project";
import { NewProjectListContainer } from "../NewProjectList/NewProjectList.style";
import ProjectCard from "../ProjectCard";

interface IProps {
  projects: ProjectType[];
}

const FindList: FC<IProps> = ({ projects }) => {
  const mapProjects =
    projects &&
    projects.map((project) => {
      return (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          content={project.content}
          thumnail={
            project.mainPhoto.thumnail
              ? setUrl(project.mainPhoto.fileLocation)
              : "https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1"
          }
          isSlide={false}
        />
      );
    });
  return (
    <NewProjectListContainer>
      <div className="project-list">{mapProjects}</div>
    </NewProjectListContainer>
  );
};

export default FindList;
