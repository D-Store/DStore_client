import axios from "axios";
import Cookies from "js-cookie";

export const setToken = (value: string) => {
  const expires = new Date();
  // expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 30);
  console.log("refreshed " + value);
  console.log("set");
  Cookies.remove("access_token");
  Cookies.set("access_token", value);
};

export const getToken = () => {
  const isServer = typeof window === "undefined";

  //* 서버랑 브라우저랑 토큰 가져오는 방식이 다르기 때문
  if (isServer) {
    return axios.defaults.headers.common["Authorization"] || "";
  } else {
    return Cookies.get("access_token") || "";
  }
};

export const removeToken = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    axios.defaults.headers.common["Authorization"] = "";
  } else {
    Cookies.remove("access_token");
  }
};
