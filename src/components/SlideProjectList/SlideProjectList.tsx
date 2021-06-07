import React from "react";
import ProjectCard from "../ProjectCard";
import { setUrl } from "../../lib/setUrl";
import SlideL from "../../public/static/svg/SlideL.svg";
import SlideR from "../../public/static/svg/SlideR.svg";
import { ProjectType } from "../../types/project";
import {
  SlideProjectContainer,
  SlideProjectRow,
  SlideProjectButton,
} from "./SlideProjectList.style";

interface IProps {
  projects: ProjectType[];
}

const SlideProjectList: React.FC<IProps> = ({ projects }) => {
  const projectMap = projects.map((project: ProjectType, index: number) => {
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
        isSlide={true}
      />
    );
  });

  return (
    <SlideProjectContainer>
      <SlideProjectButton>
        <SlideL />
      </SlideProjectButton>
      <SlideProjectRow>{projectMap}</SlideProjectRow>
      <SlideProjectButton>
        <SlideR />
      </SlideProjectButton>
    </SlideProjectContainer>
  );
};

export default SlideProjectList;
