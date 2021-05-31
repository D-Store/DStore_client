import React from "react";
import { ProjectDetailContainer } from "./ProjectDetail.style";

interface IProp {
  children: React.ReactNode;
}

const ProjectDetail: React.FC<IProp> = ({ children }) => {
  return <ProjectDetailContainer>{children}</ProjectDetailContainer>;
};

export default ProjectDetail;
