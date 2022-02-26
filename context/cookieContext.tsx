import { useState } from "react";
import React from "react";
import { child } from "../types/response";
const cookieContext = React.createContext();

export const cookieProvider: React.FC<child> = (props) => {
  return (
    <cookieContext.Provider value={"helos"}>
      {props.children}
    </cookieContext.Provider>
  );
};
export default cookieContext;
