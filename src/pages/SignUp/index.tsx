import React, { useCallback, useState } from "react";
import { Container } from "./styles";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { Link } from "react-router-dom";
import { FormEvent } from "react";
import { customAxios } from "utils/customAxios";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register } = useForm();

  const [email, setEmail] = useState<string>("");
  const [password, setPwd] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

  const handleAuthEmail = async () => {
    try {
      await customAxios.post("/auth/email", { email });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async () => {
    try {
      await customAxios.post("/auth/create", { email, password, name });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Logo />
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <button onClick={handleAuthEmail}>이메일 인증하기</button>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={e => setPwd(e.target.value)}
        />
        <input type="password" placeholder="비밀번호를 입력해주세요" />
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="submit" onClick={handleSignUp}>
          회원가입
        </button>
        <span className="go-login">
          <Link to="/login">로그인</Link>
        </span>
      </form>
    </Container>
  );
};

export default SignUp;
