import React from "react";
import { useState, useEffect } from "react";
import { child } from "../types/response";
import cookie from "js-cookie";
import { useRouter } from "next/router";
const cookieContext = React.createContext({
  login: false,
  logOut: () => {},
  log: () => {},
});

export const CookieProvider: React.FC<child> = (props) => {
  const router = useRouter();
  const [login, setLogin] = useState<boolean>(false);
  const log = () => {
    setLogin(true);
  };
  useEffect(() => {
    const cok = cookie.get("jwt");
    if (cok) {
      log();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOut = () => {
    setLogin(false);
    cookie.remove("jwt");
    cookie.remove("id");
    router.push("/login");
  };

  interface ty {
    logOut: () => void;
    login: boolean;
    log: () => void;
  }

  const val: ty = {
    logOut,
    login,
    log,
  };

  return (
    <cookieContext.Provider value={val}>
      {props.children}
    </cookieContext.Provider>
  );
};
export default cookieContext;
