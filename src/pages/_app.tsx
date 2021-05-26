import { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import PageTemplate from "../components/PageTemplate";
import GlobalStyle from "../style/GlobalStyle";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
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
