import App, { AppContext, AppProps } from "next/app";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import Head from "next/head";
import PageTemplate from "../components/PageTemplate";
import GlobalStyle from "../style/GlobalStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { wrapper } from "../store";
import ReduxToastr from "react-redux-toastr";
import axios from "axios";
import cookies from "next-cookies";
import { setToken } from "../lib/setToken";
import { customAxios } from "../lib/api";
import { toastr } from "react-redux-toastr";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
import { UserType } from "../types/user";
import { meAPI } from "../lib/api/user";

interface MeResponseType {
  httpStatus: string;
  message: string;
  user: UserType;
}

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>디스토어 - 프로젝트 공유 서비스</title>
      </Head>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      <GlobalStyle />
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
      <div id="root-modal"></div>
    </>
  );
};

app.getInitialProps = async (context: AppContext) => {
  const appInitialProps = await App.getInitialProps(context);

  const { ctx } = context;
  const { store } = ctx;
  const { isLoggedIn } = store.getState().user;
  const allCookies = cookies(ctx);
  const accessTokenByCookie = allCookies["access_token"];

  if (accessTokenByCookie !== undefined) {
    const refreshTokenByCookie = allCookies["refreshToken"] || "";
    setToken(accessTokenByCookie, refreshTokenByCookie);
  }
  try {
    if (!isLoggedIn && accessTokenByCookie) {
      const res = await meAPI(`Bearer ${accessTokenByCookie}`);
      store.dispatch(userActions.setLoggedUser(res.data.user));
    }
  } catch (error) {}

  return { ...appInitialProps };
};

export default wrapper.withRedux(app);
