import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContex";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    const lastpath = localStorage.getItem("lastPath") || "/";
    dispatch({ type: types.login, payload: { name: "Fernando" } });
    history.replace(lastpath);
    // history.push("/");
  };
  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
