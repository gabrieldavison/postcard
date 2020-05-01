import React, { useState } from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import appController from "../logic/appController";
import mockUsers from "../logic/mockUsers";
import Feed from "./Feed";
//creates mock user accounts
mockUsers();
const App = () => {
  const [currentUser, updateCurrentUser] = useState(undefined);
  function userChange() {
    updateCurrentUser(appController.currentUser);
  }
  return (
    <div>
      {currentUser === undefined ? (
        <Login
          loginUser={appController.login}
          addUser={appController.addUser}
          userChange={userChange}
        />
      ) : (
        <Feed />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
