import { toastr } from "react-redux-toastr";
import { UserType } from "../../../types/user";
import customAxios from "../../customApi";
import { useRouter } from "next/router";

interface IProps {
  email: string;
  password: string;
}

export const loginAPI = async (data: IProps) => {
  try {
    const res = await customAxios.post(`/auth/login`, data);
    return res;
  } catch (error) {
    toastr.error(error.response.data.httpStatus, error.response.data.message);
    return error.response;
  }
};

export const meAPI = async () => {
  try {
    const res = await customAxios.get<UserType>(`/user/me`);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const refreshTokenAPI = async (refreshToken: string) => {
  try {
    const res = await customAxios.post("/auth/refresh", {
      refresh: refreshToken,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const emailCheckAPI = async (email: string) => {
  customAxios
    .post(`/auth/email`, {
      email,
    })
    .then((response) => {
      toastr.success("작업 성공", response.data.message);
      return response;
    })
    .catch((error) => {
      toastr.error("에러", error.response.data.message);
      return error;
    });
};

interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export const registerAPI = async (data: RegisterData) => {
  const response = customAxios.post(`/auth/create`, data);
  return response;
  // .then((response) => {
  //   toastr.success("회원가입 성공", response.data.message);
  // })
  // .catch((error) => {
  //   toastr.error("에러 발생", error.response.data.message);
  // });
};
