import React, { useState } from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import appController from "../logic/appController";
import mockUsers from "../logic/mockUsers";
import Feed from "./Feed";
//creates mock user accounts
mockUsers();
const App = () => {
  //username of current user
  const [currentUserName, updateCurrentUserName] = useState("gabrieldavison");

  function userChange() {
    updateCurrentUserName(appController.currentUser);
  }

  return (
    <div>
      {currentUserName === undefined ? (
        <Login
          loginUser={appController.login}
          addUser={appController.addUser}
          userChange={userChange}
        />
      ) : (
        <Feed
          //passes an array of all postcards to feed
          allPostcards={appController.users
            .map((user) => user.postcards)
            .reduce((prev, curr) => prev.concat(curr))}
        />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
