import { createReducer } from "typesafe-actions";
import { SET_SERVER_RENDERED } from "./action";
import { IServerState, ServerActions } from "./types";

export const initialState: IServerState = {
  isServerRendered: false,
};

export default createReducer<IServerState, ServerActions>(initialState, {
  [SET_SERVER_RENDERED]: (state, action) => ({
    isServerRendered: true,
  }),
});
