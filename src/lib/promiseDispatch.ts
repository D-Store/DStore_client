import { GetServerSidePropsContext } from "next-redux-wrapper";
import { Store } from "redux";
import { RootState } from "../store";
import { getBannerThunk } from "../store/banner";

export const getBannerPromise = async (ctx: any) => {
  const { store } = ctx;

  const { dispatch } = store;
  await dispatch(getBannerThunk());
};

export const getProjectsPromise = async (ctx: any) => {
  const { store } = ctx;
  const state: RootState = store.getState();

  const { dispatch } = store;
  await dispatch();
};
