import React, { useCallback, useState } from "react";
import { Form } from "./styles";
import { useForm } from "react-hook-form";
import { emailCheckAPI } from "../../lib/api/user";
import { usePending } from "../../hooks/usePending";

interface SignUp {
  email: string;
  password: string;
  passwordChk: string;
  name: string;
}

const SignUpForm = () => {
  const { register, handleSubmit: submit, getValues } = useForm<SignUp>();
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const handleSubmit = (inputData: SignUp) => {
    const hasEmpty = !Boolean(
      getValues().email &&
        getValues().name &&
        getValues().password &&
        getValues().passwordChk
    );

    const samePassword = getValues().password === getValues().passwordChk;

    if (!hasEmpty && isEmailChecked && samePassword) {
      console.log("회원가입 진행시켜");
    } else {
      console.log("누락됨");
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
