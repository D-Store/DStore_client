import { customAxios } from "..";
import { toastr } from "react-redux-toastr";

interface IProps {
  email: string;
  password: string;
}

export const loginAPI = async (data: IProps) => {
  try {
    const res = await customAxios.post(`/auth/login`, data);
    return res;
  } catch (error) {
    toastr.error("에러가 발생했습니다!", "서버 오류");
    return error.response;
  }
};
