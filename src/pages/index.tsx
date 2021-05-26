import { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>메인 | 디스토어</title>
      </Head>
      <div>
        <Banner />
        {/* <CategoryList /> */}
      </div>
    </>
  );
};

export default index;
