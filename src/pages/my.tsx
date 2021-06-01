import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import useModal from "../hooks/useModal";
import { RootState, wrapper } from "../store";
import { UserState } from "../types/reduxState";
import styled from "styled-components";
import sizes from "../style/sizes";
import pallete from "../style/pallete";
import { tryLoginThunk } from "../store/user";

interface IProps {
  token: string;
  user: UserState;
}
const my: NextPage<IProps> = ({ token, user }) => {
  const { openModal, ModalPortal } = useModal();

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
        <>
          <ModalPortal>
            <LoginForm token={token} />
          </ModalPortal>
          <NotLoggedInPage>
            <h1>😓로그인을 하셔야 이용하실 수 있습니다.</h1>
            <button onClick={openModal}>로그인</button>
          </NotLoggedInPage>
        </>
        {/* {user.isLoggedIn ? (
          <>
            내 정보
            <h1>{user.name}</h1>
            <img src={user.profileImage} alt={`${user.name}'s profile image`} />
          </>
        ) : ( compo here)}*/}
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
  async (context) => {}
);

export default my;
