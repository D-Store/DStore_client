import { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList/index";
import ProjectCard from "../components/HotProjectList";
import NewProjectList from "../components/NewProjectList";
import SlideProjectList from "../components/SlideProjectList";
import { getBannerAPI } from "../lib/api/banner";
import { getProjects } from "../lib/api/project";
import { wrapper } from "../store";

const index: NextPage = ({ banners, projects }: any) => {
  return (
    <>
      <Head>
        <title>메인 | 디스토어</title>
      </Head>
      <div>
        <Banner banners={banners} />
        <CategoryList />
        <ProjectCard projects={projects} />
        <NewProjectList projects={projects} />
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    try {
      const bannerRes: any = await getBannerAPI();
      const projectRes: any = await getProjects({
        page: 0,
        size: 4,
        sort: "id,desc",
      });

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
