import { customAxios } from "utils/customAxios";

const fetcher = async (url: string) =>
  await customAxios.get(url).then((response) => {
    return response.data;
  });

export default fetcher;
