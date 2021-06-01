import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import useModal from "../hooks/useModal";
import { RootState, useTypedSelector, wrapper } from "../store";
import { UserState } from "../types/reduxState";
import styled from "styled-components";
import sizes from "../style/sizes";
import pallete from "../style/pallete";
import { tryLoginThunk } from "../store/user";
import { getToken } from "../lib/token";

const my: NextPage = () => {
  const { openModal, ModalPortal } = useModal();

  const { name, profileImage, login } = useTypedSelector(
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
          <>
            내 정보
            <h1>홍준혁</h1>
            <img src={profileImage} alt={`${name}'s profile image`} />
          </>
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
    console.log(getToken());
  }
);

export default my;
