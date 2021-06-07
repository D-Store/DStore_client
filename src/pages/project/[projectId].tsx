import React from "react";
import Head from "next/head";
import ReadProjectCard from "../../components/ReadProjectCard";
import ReadProjectContent from "../../components/ReadProjectContent";
import ReadProjectReview from "../../components/ReadProjectReview";
import { wrapper } from "../../store";
import { pageInit } from "../../lib/pageInit";
import { getCommentsAPI, getProjectAPI } from "../../lib/api/project";
import { ProjectType } from "../../types/project";
import { CommentType } from "../../types/comment";

interface IProps {
  project: ProjectType;
  comments: CommentType[];
}

const projectId: React.FC<IProps> = ({ project, comments }) => {
  return (
    <>
      <Head>
        <title>메인 | 디스토어</title>
      </Head>
      <ReadProjectCard project={project} />
      <ReadProjectContent />
      <ReadProjectReview comments={comments} />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context: any) => {
    await pageInit(context);
    const { projectId } = context.params;

    const projectResponse = await getProjectAPI(Number(projectId));
    const commentsResponse = await getCommentsAPI(Number(projectId));

    console.log(commentsResponse);

    return {
      props: {
        project: projectResponse.data.project,
        comments: commentsResponse.data.comments,
      },
    };
  }
);

export default projectId;
