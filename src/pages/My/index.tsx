import React, { useCallback, useState } from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import ContentLoaderComponent from "components/ContentLoader";
import { Contaienr, MyInfoCardContainer } from "./styles";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import useModal from "hooks/useModal";

interface Form {
  email: string;
  password: string;
}

const My = () => {
  const { ModalPortal, openModal, closeModal } = useModal();
  const { data: userData, error } = useSWR("/user/me", fetcher);
  const { register, handleSubmit } = useForm();

  const handleLogout = useCallback(() => {
    sessionStorage.clear();
    window.location.replace("/login");
  }, []);

  const handleEditProfile = useCallback(() => {
    openModal();
  }, [openModal]);

  if (!userData && !error) {
    return <ContentLoaderComponent />;
  }

  if (error) {
    return <small>인터넷 연결을 확인해주세요</small>;
  }

  if (!userData) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <MyInfoCardContainer>
        <div className="background">
          <img
            src={
              userData?.user.profileImage ||
              "https://mblogthumb-phinf.pstatic.net/20150417_264/ninevincent_14291992723052lDb3_JPEG/kakao_11.jpg?type=w2"
            }
            alt={`${userData?.user.name}'s profile`}
          />
          <button className="user-setting" onClick={handleEditProfile}>
            회원정보 수정
          </button>
        </div>
        <h1>{userData?.user.name}</h1>
        <button onClick={handleLogout}>로그아웃</button>
      </MyInfoCardContainer>
      <ModalPortal>
        <Contaienr>
          <div className="title">
            <h1>프로필 수정</h1>
          </div>
          <div className="photo">
            <img
              id="profile"
              src={
                userData?.user.profileImage ||
                "https://mblogthumb-phinf.pstatic.net/20150417_264/ninevincent_14291992723052lDb3_JPEG/kakao_11.jpg?type=w2"
              }
              alt=""
            />
            <div>⚙️</div>
          </div>
          <div className="name">
            <input type="text" placeholder="이름" {...register("name")} />
          </div>
          <div className="change">
            <button>변경</button>
          </div>
          {/* <div className="introduce">
            <textarea placeholder="자기소개" />
          </div>
          <div className="change">
            <button>변경</button>
          </div> */}
          <div className="auth">
            {/* {isHandle
              ? form("email", "password")
              : form("changePassword", "changeName")}
            <div className="bigBtn">
              <div className="pwd">
                <button onClick={() => handleSubmit(handleChange)}>
                  비밀번호 변경
                </button>
              </div>
              <div className="delete">
                <button onClick={() => handleSubmit(handleDelete)}>
                  계정 삭제
                </button>
              </div>
            </div> */}
          </div>
        </Contaienr>
      </ModalPortal>
    </div>
  );
};

export default My;
