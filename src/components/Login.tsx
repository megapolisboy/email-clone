import { Button } from "@material-ui/core";
import { Email } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectCurrentUser, signIn } from "../features/userSlice";
import "../styles/Login.css";

const Login = () => {
  const dispatch = useAppDispatch();
  const logIn = () => {
    dispatch(signIn());
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__emblem">
          <Email />
          <h1>Gmail</h1>
        </div>
        <Button variant="contained" color="primary" onClick={logIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
