import React from "react";
import { LoginContext } from "./LoginContext";

export const StatusContext = React.createContext();

export function StatusContextProvider({ children }) {
  const { isAuth } = React.useContext(LoginContext);
  const [token, settoken] = React.useState("");

  function Settoken() {
    if (!isAuth) {
      settoken(localStorage.getItem("token"));
      console.log(token);
    } else {
      settoken("");
    }
  }
  return (
    <StatusContext.Provider value={{ token, Settoken }}>
      {children}
    </StatusContext.Provider>
  );
}
