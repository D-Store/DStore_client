import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import styled from "styled-components";
import useModal from "../hooks/useModal";
import sizes from "../style/sizes";

const Container = styled.div`
  width: 480px;
  height: 614px;
  background-color: white;
  z-index: 11;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  h1 {
    font-weight: bold;
    font-size: ${sizes.big_font};
  }
  form {
    margin-top: calc(100% / 2);
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const my: NextPage = () => {
  const { openModal, ModalPortal } = useModal();

  useEffect(() => {
    openModal();
  }, []);

  return (
    <>
      <Head>
        <title>마이 페이지 | 디스토어</title>
      </Head>

      <ModalPortal>
        <Container>
          <h1>로그인이 필요한 서비스입니다.</h1>
          <form>
            <input type="text" placeholder="이메일" />
            <input type="password" placeholder="비밀번호" />
            <button>로그인</button>
          </form>
        </Container>
      </ModalPortal>
      <div>마이 페이지입니다.</div>
    </>
  );
};
export default my;
