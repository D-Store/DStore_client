import React from "react";
import ProjectCard from "../ProjectCard";
import { HotProjectListContainer } from "./HotProjectList.style";

const HotProjectList = () => {
  return (
    <HotProjectListContainer>
      <h1 className="hot-title">따끈따끈한 프로젝트</h1>
      <p className="hot-desc">갓 올라온 프로젝트들을 확인해보세요!</p>
      <div className="project-list">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </HotProjectListContainer>
  );
};

export default HotProjectList;
