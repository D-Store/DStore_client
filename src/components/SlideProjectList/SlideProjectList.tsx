import React from "react";
import ProjectCard from "../ProjectCard";
import  { SlideProjectContainer , SlideProjectColumn , SlideProjectRow , SlideProjectButton }  from "./SlideProjectList.Style";

const HotProjectList = () => {
  return (
    <SlideProjectContainer>
        <SlideProjectButton>
        왼쪽
        </SlideProjectButton>
        <SlideProjectRow>
        <SlideProjectColumn>
        <ProjectCard isSlide={true} />
        <ProjectCard isSlide={true} />
        </SlideProjectColumn>
        <SlideProjectColumn>
        <ProjectCard isSlide={true} />
        <ProjectCard isSlide={true} />
        </SlideProjectColumn>
        </SlideProjectRow>
        <SlideProjectButton>
        오른쪽
        </SlideProjectButton>
    </SlideProjectContainer>
  );
};

export default HotProjectList;
