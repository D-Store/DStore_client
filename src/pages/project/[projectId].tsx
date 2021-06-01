import React, { useEffect } from "react";
import { customAxios } from "../../lib/customApi";
import { useRouter } from "next/router";
import Head from "next/head";
import ReadProjectCard from "../../components/ReadProjectCard";
import ReadProjectContent from "../../components/ReadProjectContent";
import ReadProjectReview from "../../components/ReadProjectReview";

const projectId: React.FC = () => {
  const tryProject = async () => {
    try {
      const router = useRouter();
      const response = await customAxios.get(
        `/project/${router.query.projectId}`
      );
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  const project = tryProject();
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

export default projectId;
