import { customAxios } from "utils/customAxios";

const fetcher = async (url: string) =>
  await customAxios.get(url).then((response) => {
    return response.data;
  });

export const paramFetcher = async (url: string, params: object): Promise<any> =>
  await customAxios
    .get(url, {
      params,
    })
    .then((response: any) => {
      return response.data;
    });
export default fetcher;
