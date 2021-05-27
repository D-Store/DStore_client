import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { configureStore, combineReducers, AnyAction } from "@reduxjs/toolkit";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";

const rootReducer = combineReducers({});

const reducer = (state: any, action: AnyAction) => {
  if (action.payload === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  }
  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

const initStore = () => {
  return configureStore({
    reducer,
    devTools: true,
  });
};

export const wrapper = createWrapper(initStore);
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
