import { NextPage } from "next";
import Head from "next/head";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>찾을수 없는 페이지</title>
      </Head>
      <div>404 Not Found</div>
    </>
  );
};

export default NotFound;
