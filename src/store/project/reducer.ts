import { createReducer } from "typesafe-actions";
import { IProjectState, ProjectActions } from "./types";
import {
  GET_PROJECTS,
  GET_PROJECTS_FAILURE,
  GET_PROJECTS_SUCCESS,
} from "./actions";
import { AnyAction } from "redux";

export const initialState: IProjectState = {
  loading: false,
  error: null,
  data: [],
};

export default createReducer<IProjectState, ProjectActions>(initialState, {
  [GET_PROJECTS]: (state, action) => ({
    ...state,
    loading: true,
  }),
  [GET_PROJECTS_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    data: [...action.payload],
  }),
  [GET_PROJECTS_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: true,
  }),
});
