import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList/index";
import HotProjectList from "../components/HotProjectList";
import NewProjectList from "../components/NewProjectList";
import SlideProjectList from "../components/SlideProjectList";
import { getBannerAPI } from "../lib/api/banner";
import { getProjects } from "../lib/api/project";
import { wrapper } from "../store";
import allCookies from "next-cookies";

const index: NextPage = ({ banners, projects }: any) => {
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
    axios.defaults.headers.Authorization = "";
    const cookie = context.req ? allCookies(context).access_token : "";
    if (context.req && cookie) {
      axios.defaults.headers.Authorization = `Bearer ${cookie}`;
    }

    try {
      const [bannerRes, projectRes]: any = await Promise.all([
        getBannerAPI(),
        getProjects({
          page: 0,
          size: 10,
          sort: "id,desc",
        }),
      ]);

      return {
        props: {
          banners: bannerRes.data.bannerLocation,
          projects: projectRes.data.projectList,
        },
      };
    } catch (error) {
      return {
        props: {
          banners: [],
        },
      };
    }
  }
);

export default index;
