import { UserType } from "../../../types/user";
import axios, { AxiosResponse } from "axios";

interface IProps {
  email: string;
  password: string;
}

export const loginAPI = async (data: IProps) => {
  try {
    const res = await axios.post(`/auth/login`, data);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const meAPI = async () => {
  try {
    const res = await axios.get<UserType>(`/user/me`);
    return res;
  } catch (error) {
    return error.response;
  }
};
