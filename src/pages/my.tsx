import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm";
import useModal from "../hooks/useModal";
import { useSelector, wrapper } from "../store";
import { UserState } from "../types/reduxState";
import allCookies from "next-cookies";
import styled from "styled-components";
import sizes from "../style/sizes";
import pallete from "../style/pallete";

interface IProps {
  user: UserState;
}
const my: NextPage<IProps> = ({ user }) => {
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
        {user.isLoggedIn ? (
          <>
            내 정보
            <h1>{user.name}</h1>
            <img src={user.profileImage} alt={`${user.name}'s profile image`} />
          </>
        ) : (
          <>
            <ModalPortal>
              <LoginForm />
            </ModalPortal>
            <NotLoggedInPage>
              <h1>😓로그인을 하셔야 이용하실 수 있습니다.</h1>
              <button onClick={openModal}>로그인</button>
            </NotLoggedInPage>
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
    axios.defaults.headers.Authorization = "";
    const cookie = context.req ? allCookies(context).access_token : "";
    if (context.req && cookie) {
      axios.defaults.headers.Authorization = `Bearer ${cookie}`;
    }

    return {
      props: {
        user: context.store.getState().user,
      },
    };
  }
);

export default my;
