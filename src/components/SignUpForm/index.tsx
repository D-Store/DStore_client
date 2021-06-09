import React from "react";
import { Form } from "./styles";

const SignUpForm = () => {
  return (
    <Form>
      <h1>📄회원가입</h1>
      <input type="text" placeholder="이메일" />
      <button>이메일 인증</button>
      <input type="password" placeholder="비밀번호" />
      <input type="password" placeholder="비밀번호 확인" />
      <input type="text" placeholder="이름" />
      <button className="register">회원가입</button>
    </Form>
  );
};

export default SignUpForm;
