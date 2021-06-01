import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
} from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import reduxLogger from "next-redux-logger";

import serverReducer from "./server";
import userReducer from "./user";
import bannerReducer from "./banner";
import projectReducer from "./project";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  server: serverReducer,
  user: userReducer,
  banner: bannerReducer,
  project: projectReducer,
  toastr: toastrReducer,
});

const reducer = (state: RootState | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      if (state?.server.isServerRendered) {
        return { ...state };
      }
      return {
        ...state,
        ...action.payload,
        server: { isServerRendered: true },
      };
    default: {
      return rootReducer(state, action);
    }
  }
};

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>;

export const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

//reduxLogger
const configureStore = () => {
  return createStore(reducer, bindMiddleware([thunk]));
};

export const wrapper = createWrapper(configureStore);
