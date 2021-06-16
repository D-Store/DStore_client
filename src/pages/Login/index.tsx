import { useCallback } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container } from "./styles";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { customAxios } from "utils/customAxios";

interface Form {
  email: string;
  password: string;
}

const Login = () => {
  const {
    data: userData,
    error,
    revalidate,
  } = useSWR("/user/me", fetcher, {
    errorRetryInterval: 10000,
  });

  const { register, handleSubmit } = useForm<Form>();

  const onSubmit = useCallback(
    (loginInputData: Form) => {
      const { email, password } = loginInputData;
      if (email && password) {
        customAxios
          .post(`/auth/login`, {
            email,
            password,
          })
          .then((response) => {
            sessionStorage.setItem(
              "access_token",
              response.data.tokens.accessToken
            );
            sessionStorage.setItem(
              "refresh_token",
              response.data.tokens.refreshToken
            );
            sessionStorage.setItem(
              "access_expire",
              response.data.tokens.accessExpiredTime
            );

            customAxios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${response.data.tokens.accessToken}`;
            console.log(response);
            toast.success(response.data.message);
            revalidate();
          })
          .catch((error) => {
            console.dir(error.response);
            toast.error("에러발생");
          });
      }
    },
    [revalidate]
  );

  if (userData) {
    return <Redirect to="/template/main" />;
  }

  return (
    <Container>
      <Logo />
      <h1>로그인</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="이메일을 입력해주세요"
          {...register("email")}
        />
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password")}
        />
        <button type="submit">로그인</button>
        <span className="go-register">
          <Link to="/signup">회원가입 하러가기</Link>
        </span>
      </form>
    </Container>
  );
};

export default Login;
