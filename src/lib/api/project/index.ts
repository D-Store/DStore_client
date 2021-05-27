import { customAxios } from "../";

export const getProjects = async () => {
  const res: any = await customAxios.get(`/project/list`);

  return res;
};
