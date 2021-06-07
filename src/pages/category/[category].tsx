import { useRouter } from "next/dist/client/router";
import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { getProjectsByCategodyAPI } from "../../lib/api/project";
import { pageInit } from "../../lib/pageInit";
import { wrapper } from "../../store";
import { ProjectType } from "../../types/project";

interface IProps {
  projects: ProjectType[];
}

const Category: React.FC<IProps> = ({ projects }) => {
  const mapProjects = projects.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        id={project.id}
        title={project.title}
        content={project.content}
        thumnail={project.mainPhoto.fileLocation}
      />
    );
  });
  const { query } = useRouter();
  return (
    <>
      <h1>{query.category}의 검색 결과</h1>
      {projects.length === 0 ? <>프로젝트 없음</> : <>{mapProjects}</>}
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
