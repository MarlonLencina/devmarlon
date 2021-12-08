import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <meta name="description" content="Portofio full stack developer" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
