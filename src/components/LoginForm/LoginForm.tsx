import React from "react";
import { Container } from "./LoginForm.style";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginAPI, meAPI } from "../../lib/api/user";
import { useDispatch } from "react-redux";
import axios, { AxiosResponse } from "axios";
import { toastr } from "react-redux-toastr";
import { UserType } from "../../types/user";

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
  const onSubmit = async (loginInputData: Form) => {
    const loginResponse: AxiosResponse<LoginResponseType> = await loginAPI(
      loginInputData
    );
    const { accessToken, refreshToken } = loginResponse.data.tokens;

    console.log(accessToken, refreshToken);
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
    </Container>
  );
};

export default LoginForm;
