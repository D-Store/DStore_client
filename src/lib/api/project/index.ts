import { customAxios } from "../../customApi";
interface IProps {
  page: number;
  size: number;
  sort: string;
}
interface IParamsTag {
  page: number;
  size: number;
  sort: string;
  tags: string[];
}

export const getProjectsAPI = async (data: IProps) => {
  try {
    const res: any = await customAxios.get(
      `/project?page=${data.page}&size=${data.size}&sort=${data.sort}`
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getProjectAPI = async (projectId: number) => {
  try {
    const res = await customAxios.get(`/project/detail/${projectId}`);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getCommentsAPI = async (projectId: number) => {
  try {
    const res = await customAxios.get(`/comment/${projectId}`);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getProjectsByCategodyAPI = async (data: IParamsTag) => {
  try {
    const { page, size, sort, tags } = data;
    const tagParams = tags.join();

    const res = await customAxios.get(`/tag/projects`, {
      params: {
        page,
        size,
        sort,
        tags: tagParams,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

interface CommentCreateType {
  projectId: number;
  comment: string;
}

export const createComment = async (data: CommentCreateType) => {
  const response = await customAxios.post("comment", data);

  return response;
};
