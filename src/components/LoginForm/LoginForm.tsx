import React from "react";
import { Container } from "./LoginForm.style";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginAPI, meAPI } from "../../lib/api/user";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user";
import { AxiosResponse } from "axios";
import { toastr } from "react-redux-toastr";
import { setToken } from "../../lib/setToken";
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

const LoginForm = () => {
  const { register, handleSubmit } = useForm<Form>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const res: AxiosResponse<LoginResponseType> = await loginAPI(data);

    if (res.status === 200) {
      const { accessToken, refreshToken } = res.data.tokens;
      setToken(accessToken, refreshToken);
      const userResponse: AxiosResponse<MeResponseType> = await meAPI(
        `Bearer ${accessToken}`
      );
      const userInfo = userResponse.data.user;
      dispatch(userActions.setLoggedUser(userInfo));
    }

    if (res.status === 400) {
      toastr.error("인증 오류", "아이디나 비밀번호를 확인해보세요");
    }

    if (res.status === 500) {
      toastr.error("인증 오류", "아이디나 비밀번호를 확인해보세요");
    }
  };

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
