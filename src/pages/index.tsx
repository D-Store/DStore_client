import { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList/index";
import { getBannerAPI, IGetBanner } from "../lib/api/banner";
import { wrapper } from "../store";

const index: NextPage = ({ banners }: any) => {
  return (
    <>
      <Head>
        <title>메인 | 디스토어</title>
      </Head>
      <div>
        <Banner banners={banners} />
        <CategoryList />
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    try {
      const res: any = await getBannerAPI();

      return {
        props: {
          banners: res.data.bannerLocation,
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
