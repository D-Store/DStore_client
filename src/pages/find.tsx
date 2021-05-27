import { NextPage } from "next";
import Head from "next/head";
import { increase, decrease } from "../store/counter";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "../store";

const find: NextPage = () => {
  return (
    <>
      <Head>
        <title>탐색 | 디스토어</title>
      </Head>
      <div>탐색 페이지입니다.</div>
    </>
  );
};

export default find;
