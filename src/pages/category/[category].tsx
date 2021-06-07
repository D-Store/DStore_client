import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";
import ProjectCard from "../../components/ProjectCard";
import SearchProjectList from "../../components/SearchProjectList";
import { getProjectsByCategodyAPI } from "../../lib/api/project";
import { pageInit } from "../../lib/pageInit";
import { wrapper } from "../../store";
import sizes from "../../style/sizes";
import { ProjectType } from "../../types/project";

interface IProps {
  projects: ProjectType[];
}

const SearchTitle = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: ${sizes.big_font};
  margin-bottom: 20px;
`;

const Category: React.FC<IProps> = ({ projects }) => {
  const { query } = useRouter();
  return (
    <>
      <SearchTitle>{query.category}의 검색 결과</SearchTitle>
      {projects.length === 0 ? (
        <>프로젝트 없음</>
      ) : (
        <SearchProjectList projects={projects} />
      )}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    await pageInit(context);
    const { category } = context.params;

    const projectResponse = await getProjectsByCategodyAPI({
      page: 0,
      size: 10,
      sort: "id,desc",
      tags: [category],
    });

    console.log(projectResponse);

    if (projectResponse.status === 404) {
      return {
        props: {
          projects: [],
        },
      };
    }

    if (projectResponse.status === 200) {
      return {
        props: {
          projects: projectResponse.data.projectList,
        },
      };
    }
  }
);

export default Category;
