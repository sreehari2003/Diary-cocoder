import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Nav from "../components/navbar/Nav";
import { CookieProvider } from "../context/cookieContext";
import cookieContext from "../context/cookieContext";
import { useContext, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const ctx = useContext(cookieContext);

  return (
    <>
      <CookieProvider>
        <Nav />
        <Component {...pageProps} />
      </CookieProvider>
    </>
  );
}

export default MyApp;
