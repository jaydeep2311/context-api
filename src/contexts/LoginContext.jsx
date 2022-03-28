import React from "react";

export const LoginContext = React.createContext();

export function LoginContextProvider({ children }) {
  const [isAuth, setisAuth] = React.useState(false);

  function toggleAuth(val) {
    if (val) {
      setisAuth(false);
      console.log(isAuth);
    } else {
      setisAuth(true);
      console.log(isAuth);
    }
  }

  return (
    <LoginContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </LoginContext.Provider>
  );
}
