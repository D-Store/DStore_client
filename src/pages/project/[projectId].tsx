import React from "react";
import Head from "next/head";
import ReadProjectCard from "../../components/ReadProjectCard";
import ReadProjectContent from "../../components/ReadProjectContent";
import ReadProjectReview from "../../components/ReadProjectReview";
import { wrapper } from "../../store";
import { pageInit } from "../../lib/pageInit";
import { getProjectAPI } from "../../lib/api/project";
import { ProjectType } from "../../types/project";

interface IProps {
  project: ProjectType;
}

const projectId: React.FC<IProps> = ({ project }) => {
  return (
    <>
      <Head>
        <title>메인 | 디스토어</title>
      </Head>
      <ReadProjectCard project={project} />
      <ReadProjectContent />
      <ReadProjectReview />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context: any) => {
    await pageInit(context);
    const { projectId } = context.params;

    const response = await getProjectAPI(Number(projectId));
    console.log(response.data);

    return {
      props: {
        project: response.data.project,
      },
    };
  }
);

export default projectId;
