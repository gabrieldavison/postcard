import React, { useState } from "react";
import "./styles/Login.css";
const Login = (props) => {
  const [loginSignUp, updateLoginSignUp] = useState("login");
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");
  const [errorMessage, updateErrorMessage] = useState("");
  function loginUser(e) {
    e.preventDefault();
    if (loginSignUp === "login") {
      const authentication = props.authenticate(username, password);
      console.log(authentication);
      // if authentication is false display error message
      if (authentication[0] === false) {
        updateErrorMessage(authentication[1]);
        updateUsername("");
        updatePassword("");
      } else {
        props.loginUser(username, password);
        updateUsername("");
        updatePassword("");
      }
    } else {
      const checkUsername = props.checkUsername(username);
      if (checkUsername[0] === false) {
        updateErrorMessage(checkUsername[1]);
        updateUsername("");
        updatePassword("");
      } else {
        //adds new user and then logs them in
        props.addUser(username, password);
        props.loginUser(username, password);
        updateUsername("");
        updatePassword("");
      }
    }
  }
  return (
    <div className="login-component">
      <div className="login-container">
        <div className="login-header">
          <h1>Postcard</h1>
          <p>A social network curated by you and the people that you follow.</p>
        </div>
        <div className="login-signup-selector">
          <input
            id="login"
            type="radio"
            name="loginSignUp"
            value="login"
            checked={loginSignUp === "login"}
            onChange={(e) => updateLoginSignUp(e.target.value)}
          />
          <label htmlFor="login">Login</label>
          <input
            id="signup"
            type="radio"
            name="loginSignUp"
            value="signUp"
            checked={loginSignUp === "signUp"}
            onChange={(e) => updateLoginSignUp(e.target.value)}
          />
          <label htmlFor="signup">Sign Up</label>
        </div>
        <form className="login-inputs">
          <div className="username">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => updateUsername(e.target.value)}
            ></input>
          </div>
          <div className="password">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
            ></input>
          </div>

          <button className="submit-button" onClick={(e) => loginUser(e)}>
            Submit
          </button>
          <p className="error-message">{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};
export default Login;
