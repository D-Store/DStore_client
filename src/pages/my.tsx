import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import useModal from "../hooks/useModal";
import { RootState, useTypedSelector, wrapper } from "../store";
import styled from "styled-components";
import sizes from "../style/sizes";
import pallete from "../style/pallete";
import { pageInit } from "../lib/pageInit";
import MyInfoCard from "../components/MyInfoCard";

const my: NextPage = () => {
  const { openModal, ModalPortal } = useModal();

  const { name, profileImage, login, id } = useTypedSelector(
    (state) => state.user.data
  );

  useEffect(() => {
    openModal();
  }, []);

  return (
    <>
      <Head>
        <title>마이 페이지 | 디스토어</title>
      </Head>

      <div
        style={{
          textAlign: "center",
        }}
      >
        {login ? (
          <MyInfoCard name={name} profile={profileImage}></MyInfoCard>
        ) : (
          <>
            <>
              <ModalPortal>
                <LoginForm />
              </ModalPortal>
              <NotLoggedInPage>
                <h1>😓로그인을 하셔야 이용하실 수 있습니다.</h1>
                <button onClick={openModal}>로그인</button>
              </NotLoggedInPage>
            </>
          </>
        )}
      </div>
    </>
  );
};

export const NotLoggedInPage = styled.div`
  h1 {
    font-size: ${sizes.big_font};
    font-weight: bold;
    margin-bottom: 50px;
  }
  button {
    border-radius: 5px;
    width: 100px;
    font-size: ${sizes.mideum_font};
    font-family: 500;
    padding: 16px;
    background-color: ${pallete.main_color};
    border: none;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    await pageInit(context);

    return {
      props: {
        login: context.store.getState().user.data.login,
      },
    };
  }
);

export default my;
