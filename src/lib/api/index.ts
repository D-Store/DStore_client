import Axios from "axios";

export const customAxios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
