import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm";
import useModal from "../hooks/useModal";
import { useSelector, wrapper } from "../store";
import { UserState } from "../types/reduxState";
import { UserType } from "../types/user";

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
            로그인을 해셔야 이용하실 수 있습니다.
            <button onClick={openModal}>로그인</button>
          </>
        )}
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    return {
      props: {
        user: context.store.getState().user,
      },
    };
  }
);

export default my;
