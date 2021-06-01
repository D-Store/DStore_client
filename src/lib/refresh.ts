import axios, { AxiosRequestConfig } from "axios";
import Cookie from "js-cookie";
import moment from "moment";

export const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const refreshToken = Cookie.get("refreshToken");

  return config;
};
