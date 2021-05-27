import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import pallete from "../style/pallete";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>찾을수 없는 페이지</title>
      </Head>
      <NotFoundContainer>
        <h1>404 Not Found</h1>
        <p>아무것도 없네요!</p>
      </NotFoundContainer>
    </>
  );
};

const NotFoundContainer = styled.div`
  text-align: center;
  h1 {
    color: ${pallete.text_color};
    font-size: 38px;
    font-weight: bold;
  }
  p {
    margin-top: 20px;
    font-weight: lighter;
    font-size: 14px;
  }
`;
export default NotFound;
