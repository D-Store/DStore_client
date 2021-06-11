import React, { FC, useState } from "react";
import styled from "styled-components";
import { setUrl } from "../../lib/setUrl";
import { ProjectType } from "../../types/project";
import { NewProjectListContainer } from "../NewProjectList/NewProjectList.style";
import ProjectCard from "../ProjectCard";

interface IProps {
  projects: ProjectType[];
}

const FindList: FC<IProps> = ({ projects }) => {
  const [searchInput, setSearchInput] = useState("");
  // const mapProjects =
  // filteredProjects.map((project) => {
  //   return (
  //     <ProjectCard
  //       key={project.id}
  //       id={project.id}
  //       title={project.title}
  //       content={project.content}
  //       thumnail={
  //         project.mainPhoto.thumnail
  //           ? setUrl(project.mainPhoto.fileLocation)
  //           : "https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1"
  //       }
  //       isSlide={false}
  //     />
  //   );
  // });
  return (
    <NewProjectListContainer>
      <div className="project-list">
        <Head>🔎 찾으시는 프로젝트 있으신가요?</Head>
      </div>
    </NewProjectListContainer>
  );
};

const Head = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;

export default FindList;
