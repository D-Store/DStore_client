import React from "react";
import { ProjectType } from "../../types/project";
import SlideProjecctList from "../SlideProjectList";
import { HotProjectContainer } from "./HotProjectList.style";

interface IProps {
  projects: ProjectType[];
}

const HotProjectList: React.FC<IProps> = ({ projects }) => {
  return (
    <HotProjectContainer>
      <h1 className="hot-title">인기있는 프로젝트</h1>
      <p className="hot-desc">저희가 추천하는 프로젝트를 둘러보세요!</p>
      <SlideProjecctList projects={projects} />
    </HotProjectContainer>
  );
};

export default HotProjectList;
