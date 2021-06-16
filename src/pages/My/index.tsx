import React, { useCallback, useState } from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import ContentLoaderComponent from "components/ContentLoader";
import { MyInfoCardContainer } from "./styles";
import { toast } from "react-toastify";
import { Redirect } from "react-router";

const My = () => {
  //TODO : SWR연동 시 내 정보 조건부 렌더링 하기
  const { data: userData, error } = useSWR("/user/me", fetcher);

  const handleLogout = useCallback(() => {
    sessionStorage.clear();
    window.location.replace("/login");
  }, []);

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
    <>
      <MyInfoCardContainer>
        <div className="background">
          <img
            src={
              userData?.user.profileImage ||
              "https://mblogthumb-phinf.pstatic.net/20150417_264/ninevincent_14291992723052lDb3_JPEG/kakao_11.jpg?type=w2"
            }
            alt={`${userData?.user.name}'s profile`}
          />
          <div className="user-setting">회원정보 수정</div>
        </div>
        <h1>{userData?.user.name}</h1>
        <button onClick={handleLogout}>로그아웃</button>
      </MyInfoCardContainer>
    </>
  );
};

export default My;
