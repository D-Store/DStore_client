import { customAxios } from "..";
import { toastr } from "react-redux-toastr";
import { UserType } from "../../../types/user";
import { AxiosResponse } from "axios";

interface IProps {
  email: string;
  password: string;
}

export const loginAPI = async (data: IProps) => {
  try {
    const res = await customAxios.post(`/auth/login`, data);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const meAPI = async (token: string) => {
  try {
    const res = await customAxios.get<UserType>(`/user/me`, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};
