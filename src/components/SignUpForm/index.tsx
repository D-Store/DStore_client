import React from "react";
import { Form } from "./styles";
import { useForm } from "react-hook-form";
import { emailCheckAPI } from "../../lib/api/user";

interface SignUp {
  email: string;
  password: string;
  passwordChk: string;
  name: string;
}

const SignUpForm = () => {
  const { register, handleSubmit: submit, getValues } = useForm<SignUp>();

  const handleSubmit = (inputData: SignUp) => {};
  const handleEmailCheck = () => {
    const email = getValues().email;
    emailCheckAPI(email);
  };

  return (
    <Form onSubmit={submit(handleSubmit)}>
      <h1>📄회원가입</h1>
      <input type="text" placeholder="이메일" {...register("email")} />
      <button type="button" onClick={handleEmailCheck}>
        이메일 인증
      </button>
      <input type="password" placeholder="비밀번호" {...register("password")} />
      <input
        type="password"
        placeholder="비밀번호 확인"
        {...register("passwordChk")}
      />
      <input type="text" placeholder="이름" {...register("name")} />
      <button className="register" type="submit">
        회원가입
      </button>
    </Form>
  );
};

export default SignUpForm;
