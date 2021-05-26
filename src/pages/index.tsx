import { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList/index";
import { getBannerAPI, IGetBanner } from "../lib/api/banner";

const index: NextPage = ({ banners }: any) => {
  console.log(banners);
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

export const getServerSideProps = async () => {
  try {
    const res: any = await getBannerAPI();
    console.log(res);
    // if (!res.bannerLocation) {
    //   return {
    //     props: {
    //       banners: [],
    //     },
    //   };
    // }
    return {
      props: {
        banners: res.data.bannerLocation,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
};

export default index;
