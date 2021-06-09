import { NextPage } from "next";
import Head from "next/head";
import Cookie from "js-cookie";
import { useTypedSelector, wrapper } from "../store";
import { pageInit } from "../lib/pageInit";
import WriteFloat from "../components/WriteFloat";
import NewProjectList from "../components/NewProjectList";
import Input from "../components/Input";
import { useState } from "react";
import FindList from "../components/FindList";

const find: NextPage = () => {
  const { data: projects } = useTypedSelector((state) => state.project);
  const [search, setSearch] = useState("");
  return (
    <>
      <Head>
        <title>탐색 | 디스토어</title>
      </Head>

      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="검색을 해보세요"
      />
      <FindList projects={projects} />
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
