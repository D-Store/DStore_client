import { customAxios } from "..";

interface IProps {
  email: string;
  password: string;
}

export const loginAPI = async (data: IProps) => {
  const res = customAxios.post(`/auth/login`, data);

  return res;
};
