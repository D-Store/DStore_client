import React from "react";
import ProjectCard from "../ProjectCard";
import { setUrl } from "../../lib/setUrl";
import { ProjectType } from "../../types/project";
import {
  SlideProjectContainer,
  SlideProjectColumn,
  SlideProjectRow,
  SlideProjectButton,
} from "./SlideProjectList.style";

const HotProjectList = ({ projects }: any) => {
  return (
    <SlideProjectContainer>
      <SlideProjectButton>왼쪽</SlideProjectButton>
      <SlideProjectRow>
        {projects &&
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
                isSlide={true}
              />
            );
          })}
      </SlideProjectRow>
      <SlideProjectButton>오른쪽</SlideProjectButton>
    </SlideProjectContainer>
  );
};

export default HotProjectList;
