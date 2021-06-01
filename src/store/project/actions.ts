import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { ProjectType } from "../../types/project";

export const GET_PROJECTS = "projects/GET_PROJECTS";
export const GET_PROJECTS_SUCCESS = "projects/GET_PROJECTS_SUCCESS";
export const GET_PROJECTS_FAILURE = "projects/GET_PROJECTS_FAILURE";

export const getProjectsAsync = createAsyncAction(
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE
)<void, ProjectType[], AxiosError<ResponseType>>();
