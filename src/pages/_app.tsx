import { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import PageTemplate from "../components/PageTemplate";
import GlobalStyle from "../style/GlobalStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
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
      <GlobalStyle />
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
    </>
  );
};

export default MyApp;
