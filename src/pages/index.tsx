import axios from "axios";
import { NextPage } from "next";
import { Context } from "next-redux-wrapper";
import Head from "next/head";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList/index";
import HotProjectList from "../components/HotProjectList";
import NewProjectList from "../components/NewProjectList";
import { pageInit } from "../lib/pageInit";
import { getBannerPromise, getProjectsPromise } from "../lib/promiseDispatch";
import { useTypedSelector, wrapper } from "../store";

const index: NextPage = () => {
  const { data: banners } = useTypedSelector((state) => state.banner);
  const { data: projects } = useTypedSelector((state) => state.project);

  return (
    <>
      <Head>
        <title>메인 | 디스토어</title>
      </Head>
      <div>
        <Banner banners={banners} />
        <CategoryList />
        {projects ? (
          <>
            <HotProjectList projects={projects} />
            <NewProjectList projects={projects} />
          </>
        ) : (
          <h1>등록되어 있는 프로젝트가 없습니다.</h1>
        )}
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    await pageInit(context);
  }
);

export default index;
