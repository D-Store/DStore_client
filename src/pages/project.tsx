import { NextPage } from "next";
import Head from "next/head";
import ReadProject from "../components/ReadProject";

const project: NextPage = () => {
  return (
    <>
      <Head>
        <title>메인 | 디스토어</title>
      </Head>
      <ReadProject />
    </>
  );
};

export default project;
