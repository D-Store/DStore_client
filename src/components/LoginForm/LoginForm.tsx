import React, { useEffect } from "react";
import { Container } from "./LoginForm.style";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginAPI } from "../../lib/api/user";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user";
import { AxiosResponse } from "axios";
import { UserType } from "../../types/user";
import { toastr } from "react-redux-toastr";
import { setToken } from "../../lib/setToken";

interface Form {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<Form>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const res: AxiosResponse<UserType> = await loginAPI(data);

    if (res.status === 400) {
      toastr.error("인증 오류", "아이디나 비밀번호를 확인해보세요");
    }

    if (res.status === 200) {
      const userInfo = res.data;
      dispatch(userActions.setLoggedUser(userInfo));
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
