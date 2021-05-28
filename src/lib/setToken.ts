import axios from "axios";
import cookie from "react-cookies";

export const setToken = (access_token: string) => {
  axios.defaults.headers.Authorization = "Bearer" + access_token;

  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24);

  cookie.save(`access_token`, access_token, {
    path: "/",
    expires,
    httpOnly: process.env.NODE_ENV === "production" ? true : false,
  });
};
