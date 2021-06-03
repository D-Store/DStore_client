import React, { useEffect } from "react";
import { Container } from "./LoginForm.style";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginAPI, meAPI } from "../../lib/api/user";
import { useDispatch } from "react-redux";
import axios, { AxiosResponse } from "axios";
import Cookie from "js-cookie";
import { UserType } from "../../types/user";
import { getToken, setToken } from "../../lib/token";
import { tryLoginThunk } from "../../store/user";
import useLoader from "../../hooks/useLoader";
import moment from "moment";

interface Form {
  email: string;
  password: string;
}

interface LoginResponseType {
  httpStatus: string;
  message: string;
  tokens: {
    accessExpiredTime: string;
    accessToken: string;
    refreshExpiredTime: string;
    refreshToken: string;
  };
}

interface MeResponseType {
  httpStatus: string;
  message: string;
  user: UserType;
}

interface IProps {
  token: string;
}

const LoginForm = () => {
  const { startLoading, endLoading, LoaderPortal } = useLoader();

  const dispatch = useDispatch();
  const onSubmit = async (loginInputData: Form) => {
    const loginResponse: AxiosResponse<LoginResponseType> = await loginAPI(
      loginInputData
    );

    const { accessToken, accessExpiredTime, refreshToken } =
      loginResponse.data.tokens;

    setToken(accessToken);
    const momentedExpireTime = moment(accessExpiredTime);
    console.log(momentedExpireTime);
    Cookie.set("refresh_token", refreshToken);
    Cookie.set("access_expired", momentedExpireTime);

    startLoading();
    dispatch(tryLoginThunk());
    endLoading();
  };
  const { register, handleSubmit } = useForm<Form>();

  return (
    <Container>
      <h1>로그인</h1>
      <form>
        <input type="text" {...register("email")} placeholder="이메일" />
        <input
          type="password"
          {...register("password")}
          placeholder="비밀번호"
        />
        <button onClick={handleSubmit(onSubmit)}>로그인</button>
      </form>
      <div className="go-register">
        회원이 아니신가요? <span>회원가입</span>
      </div>
      <LoaderPortal />
    </Container>
  );
};

export default LoginForm;
