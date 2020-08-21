import React from "react";
import "./Login.css";
import baithakLogo from "./assets/images/baithak-logo.png";
import Button from "@material-ui/core/Button";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer/reducer";
import Typography from "@material-ui/core/Typography";

function Login(props) {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={baithakLogo} alt="" />
        <div className="login__text">
          <h1>Sign in to Baithak Chat</h1>
        </div>

        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
      <div className="login__footer">
        <Typography>Copyright © Baithak Team</Typography>
        <Typography>
          Developed By:
          <a href="https://www.linkedin.com/in/sagar-siwakoti/">
            Sagar Siwakoti
          </a>
        </Typography>
      </div>
    </div>
  );
}

export default Login;
