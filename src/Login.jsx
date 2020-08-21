import React from "react";
import "./Login.css";
import baithakLogo from "./assets/images/baithak-logo.png";
import Button from "@material-ui/core/Button";
import {auth, provider} from "./firebase";

function Login(props) {

  const signIn = () => {
    auth.signInWithPopup(provider)
        .then((result)=>console.log(result))
        .catch((error)=>alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={baithakLogo} alt="" />
        <div className="login__text">
          <h1>Sign in to Baithak Chat</h1>
        </div>

        <Button onClick={signIn}>Sign In with google</Button>
      </div>
    </div>
  );
}

export default Login;
