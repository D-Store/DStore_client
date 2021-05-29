import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm";
import useModal from "../hooks/useModal";
import { useSelector } from "../store";

const my: NextPage = () => {
  const { openModal, ModalPortal } = useModal();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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
          <>내 정보</>
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
export default my;
