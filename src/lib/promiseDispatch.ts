import { GetServerSidePropsContext } from "next-redux-wrapper";
import { Store } from "redux";
import { RootState } from "../store";
import { getBannersThunk } from "../store/banner";
import { getProjectsThunk } from "../store/project/thunks";

export const getBannerPromise = async (ctx: any) => {
  const { store } = ctx;

  const { dispatch } = store;
  await dispatch(getBannersThunk());
};

export const getProjectsPromise = async (ctx: any) => {
  const { store } = ctx;

  const { dispatch } = store;
  await dispatch(getProjectsThunk());
};
