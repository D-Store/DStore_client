import { UserType } from "../../../types/user";
import customAxios from "../../customApi";

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
    const res = await customAxios.get<UserType>(`/user/me`);
    return res;
  } catch (error) {
    return error.response;
  }
};
