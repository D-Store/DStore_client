import React, { useCallback } from "react";
import { Container } from "./styles";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { Link } from "react-router-dom";
import { FormEvent } from "react";

const SignUp = () => {
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);
  return (
    <Container>
      <Logo />
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="이메일을 입력해주세요" />
        <button>이메일 인증하기</button>
        <input type="password" placeholder="비밀번호를 입력해주세요" />
        <input type="password" placeholder="비밀번호를 입력해주세요" />
        <input type="text" placeholder="이름을 입력해주세요" />
        <button type="submit">로그인</button>
        <span className="go-login">
          <Link to="/login">로그인</Link>
        </span>
      </form>
    </Container>
  );
};

export default SignUp;
