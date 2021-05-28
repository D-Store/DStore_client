import React, { useEffect } from "react";
import { setUrl } from "../../lib/setUrl";
import { ProjectType } from "../../types/project";
import ProjectCard from "../ProjectCard";
import { HotProjectListContainer } from "./NewProjectList.style";

const HotProjectList = ({ projects }: any) => {
  const mapProjects =
    projects &&
    projects.map((project: ProjectType) => {
      return (
        <ProjectCard
          key={project.id}
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

  return projects ? (
    <HotProjectListContainer>
      <h1 className="hot-title">따끈따끈한 프로젝트</h1>
      <p className="hot-desc">갓 올라온 프로젝트들을 확인해보세요!</p>
      <div className="project-list">{mapProjects}</div>
    </HotProjectListContainer>
  ) : null;
};

export default HotProjectList;
