import { HYDRATE, createWrapper, MakeStore } from "next-redux-wrapper";
import { configureStore, combineReducers, AnyAction } from "@reduxjs/toolkit";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import user from "./user";

const rootReducer = combineReducers({
  user: user.reducer,
  toastr: toastrReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

let initialRootState: RootState;

const reducer = (state: any, action: AnyAction) => {
  if (action.payload === HYDRATE) {
    if (state === initialRootState) {
      return {
        ...state,
        ...action.payload,
      };
    }
    return state;
  }
  return rootReducer(state, action);
};

const initStore: MakeStore = () => {
  const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === "development" ? true : false,
  });
  initialRootState = store.getState();
  return store;
};

export const wrapper = createWrapper(initStore);
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
