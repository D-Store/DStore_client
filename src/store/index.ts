import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
} from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import reduxLogger from "../lib/middleware/reduxLogger";
import reduxLogger from "next-redux-logger";

import serverReducer from "./server";
import userReducer from "./user";
import bannerReducer from "./banner";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  server: serverReducer,
  user: userReducer,
  banner: bannerReducer,
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

export type RootState = ReturnType<typeof rootReducer>;

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = () => {
  return createStore(reducer, bindMiddleware([thunk, reduxLogger]));
};

export const wrapper = createWrapper(configureStore);
