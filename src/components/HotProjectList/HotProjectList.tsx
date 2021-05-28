import React from "react";
import { ProjectType } from "../../types/project";
import SlideProjecctList from "../SlideProjectList";
import { HotProjectContainer } from "./HotProjectList.style";

const HotProjectList: React.FC = ({ projects }: any) => {
  return (
    <HotProjectContainer>
      <h1 className="hot-title">따끈따끈한 프로젝트</h1>
      <p className="hot-desc">갓 올라온 프로젝트들을 확인해보세요!</p>
      <SlideProjecctList projects={projects} />
    </HotProjectContainer>
  );
};

export default HotProjectList;
