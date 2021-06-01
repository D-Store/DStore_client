import { NextPage } from "next";
import { Context } from "next-redux-wrapper";
import Head from "next/head";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList/index";
import HotProjectList from "../components/HotProjectList";
import NewProjectList from "../components/NewProjectList";
import { wrapper } from "../store";

const index: NextPage = ({ banners, projects }: any) => {
  return (
    <>
      <Head>
        <title>메인 | 디스토어</title>
      </Head>
      <div>
        {/* <Banner banners={banners} />
        <CategoryList />
        {projects ? (
          <>
            <HotProjectList projects={projects} />
            <NewProjectList projects={projects} />
          </>
        ) : (
          <h1>등록되어 있는 프로젝트가 없습니다.</h1>
        )} */}
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(context => {});

export default index;
