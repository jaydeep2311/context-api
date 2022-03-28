import React from "react";
import { LoginContext } from "../contexts/LoginContext";
import styled from "styled-components";
import { StatusContext } from "../contexts/Statuscontext";

const Navbarwrapper = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  background: black;
  color: white;
  padding: 10px;
`;

const Navbar = ({ user }) => {
  const { isAuth, toggleAuth } = React.useContext(LoginContext);
  const { token, Settoken } = React.useContext(StatusContext);
  function isUser() {
    if (!isAuth) {
      fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("token", res.token);
          Settoken();
          toggleAuth(isAuth);
        });
    } else {
      Settoken();
      toggleAuth(isAuth);
    }
  }
  return (
    <Navbarwrapper style={{ display: "flex", justifyContent: "space-between" }}>
      <button onClick={() => isUser()}>{isAuth ? "Logout" : "Login"}</button>
      {token !== "" ? <div style={{ color: "white" }}>token:{token}</div> : ""}
      <br></br>
      {token !== "" ? (
        <div style={{ color: "white" }}>User is active </div>
      ) : (
        ""
      )}
    </Navbarwrapper>
  );
};

export default Navbar;
