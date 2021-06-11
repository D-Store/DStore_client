import { NextPage } from "next";
import Head from "next/head";
import { wrapper } from "../store";
import { pageInit } from "../lib/pageInit";
import WriteForm from "../components/WriteForm";
import WriteTag from "../components/WriteTag";
import PhotoSlideList from "../components/PhotoSlideList";

const find: NextPage = () => {
  //프로젝트 생성 시 필요한 것들
  //   {
  //     title:String,
  //     content:String,
  //     users:[Long],
  //     file:[file],
  //     tags:[string]
  // }

  return (
    <>
      <Head>
        <title>프로젝트 작성 | 디스토어</title>
      </Head>
      <WriteForm />
      <WriteTag />
      <PhotoSlideList />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await pageInit(context);
});

export default find;
