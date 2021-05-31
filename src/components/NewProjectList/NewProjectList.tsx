import React, { useEffect } from "react";
import { setUrl } from "../../lib/setUrl";
import { ProjectType } from "../../types/project";
import ProjectCard from "../ProjectCard";
import { NewProjectListContainer } from "./NewProjectList.style";

interface IProps {
  projects: ProjectType[];
}

const NewProjectList: React.FC<IProps> = ({ projects }) => {
  const mapProjects =
    projects &&
    projects.map(project => {
      return (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          content={project.content}
          thumnail={
            project.mainPhoto.thumnail
              ? `http://` + setUrl(project.mainPhoto.fileLocation)
              : "https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1"
          }
          isSlide={false}
        />
      );
    });

  return (
    <NewProjectListContainer>
      <h1 className="new-title">따끈따끈한 프로젝트</h1>
      <p className="new-desc">갓 올라온 프로젝트들을 확인해보세요!</p>
      <div className="project-list">{mapProjects}</div>
    </NewProjectListContainer>
  );
};

export default NewProjectList;
