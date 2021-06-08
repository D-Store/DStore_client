import { NextPage } from "next";
import Head from "next/head";
import Cookie from "js-cookie";
import { wrapper } from "../store";
import { pageInit } from "../lib/pageInit";
import WriteFloat from "../components/WriteFloat";

const find: NextPage = () => {
  return (
    <>
      <Head>
        <title>탐색 | 디스토어</title>
      </Head>
      <div>탐색 페이지입니다.</div>
      <WriteFloat />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    await pageInit(context);
  }
);

export default find;
