import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getToken, removeToken } from "./token";

const addToken = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const token = getToken();

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};

const addTokenErrorHandle = (err: AxiosError) => {
  removeToken();
};

export const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

customAxios.defaults.headers = {
  "Cache-Control": "no-cache",
  Accept: "application/json",
  Pragma: "no-cache",
  Expires: "0",
};

customAxios.interceptors.request.use(addToken, addTokenErrorHandle);

export default customAxios;
