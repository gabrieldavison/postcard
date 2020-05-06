import React, { useState } from "react";

const Login = (props) => {
  const [loginSignUp, updateLoginSignUp] = useState("login");
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");
  const [errorMessage, updateErrorMessage] = useState("");
  function loginUser(e) {
    e.preventDefault();
    if (loginSignUp === "login") {
      props.loginUser(username, password);
      updateUsername("");
      updatePassword("");
      // props.userChange();
    } else {
      //adds new user and then logs them in
      props.addUser(username, password);
      props.loginUser(username, password);
      updateUsername("");
      updatePassword("");
      props.userChange();
    }
  }
  return (
    <div>
      <div>
        <label>
          <input
            id="login"
            type="radio"
            name="loginSignUp"
            value="login"
            checked={loginSignUp === "login"}
            onChange={(e) => updateLoginSignUp(e.target.value)}
          />
          Login
        </label>
        <label>
          <input
            id="signup"
            type="radio"
            name="loginSignUp"
            value="signUp"
            checked={loginSignUp === "signUp"}
            onChange={(e) => updateLoginSignUp(e.target.value)}
          />
          Sign Up
        </label>
      </div>
      <form>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => updateUsername(e.target.value)}
        ></input>

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => updatePassword(e.target.value)}
        ></input>
        <button onClick={(e) => loginUser(e)}>Submit</button>
        <p>{errorMessage}</p>
      </form>
    </div>
  );
};
export default Login;
