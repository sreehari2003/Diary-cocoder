import "../styles/globals.scss";
// import { useEffect } from "react";
import type { AppProps } from "next/app";
import Nav from "../components/navbar/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
