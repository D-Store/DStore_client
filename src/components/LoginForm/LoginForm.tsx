import React from "react";
import { Container } from "./LoginForm.style";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginAPI } from "../../lib/api/user";

interface Form {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const res = await loginAPI(data);

    console.log(res.data.tokens);
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
