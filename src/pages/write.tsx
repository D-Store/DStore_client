import { NextPage } from "next";
import Head from "next/head";
import { wrapper } from "../store";
import { pageInit } from "../lib/pageInit";
import WriteForm from "../components/WriteForm";

const find: NextPage = () => {
  return (
    <>
      <Head>
        <title>프로젝트 작성 | 디스토어</title>
      </Head>
      <WriteForm />
    </>
  );
};

export default find;
