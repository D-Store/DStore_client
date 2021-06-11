import React, { useCallback, useState } from "react";
import { Form } from "./styles";
import { useForm } from "react-hook-form";
import { emailCheckAPI, registerAPI } from "../../lib/api/user";
import { toastr } from "react-redux-toastr";
import { useRouter } from "next/dist/client/router";

interface SignUp {
  email: string;
  password: string;
  passwordChk: string;
  name: string;
}

const SignUpForm = () => {
  const { register, handleSubmit: submit, getValues } = useForm<SignUp>();
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    const { email, password, name, passwordChk } = getValues();
    const hasEmpty = !Boolean(email && name && password && passwordChk);

    const samePassword = password === passwordChk;

    if (!hasEmpty && isEmailChecked && samePassword) {
      registerAPI({
        email,
        name,
        password,
      })
        .then((response) => {
          if (response.status === 200) {
            toastr.success("회원가입 성공", "");
            setTimeout(() => {
              router.push("/my");
            }, 2);
          }
        })
        .catch((error) => {
          toastr.error("에러 발생", error.response.data.message);
        });
    } else {
      toastr.error("누락됨", "양식을 다 채워주세요");
    }
  };

  const handleEmailCheck = useCallback(async () => {
    try {
      const email = getValues().email;
      await emailCheckAPI(email);
      setIsEmailChecked(true);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Form onSubmit={submit(handleSubmit)}>
      <h1>📄회원가입</h1>
      <input type="text" placeholder="이메일" {...register("email")} />
      <button type="button" onClick={handleEmailCheck}>
        이메일 인증{" "}
        {isEmailChecked ? (
          <span className="success">송신됨</span>
        ) : (
          <span className="error">미완료</span>
        )}
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
