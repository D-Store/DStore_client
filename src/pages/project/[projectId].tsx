import React from "react";
import Head from "next/head";
import ReadProjectCard from "../../components/ReadProjectCard";
import ReadProjectContent from "../../components/ReadProjectContent";
import ReadProjectReview from "../../components/ReadProjectReview";

const projectId = () => {
  return (
    <>
      <Head>
        <title>메인 | 디스토어</title>
      </Head>
      <ReadProjectCard />
      <ReadProjectContent />
      <ReadProjectReview />
    </>
  );
};

export default projectId;
