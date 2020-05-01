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
  const [currentUsername, updateCurrentUsername] = useState("gabrieldavison");

  function userChange() {
    updateCurrentUsername(appController.currentUser);
  }

  return (
    <div>
      {currentUsername === undefined ? (
        <Login
          loginUser={appController.login}
          addUser={appController.addUser}
          userChange={userChange}
        />
      ) : (
        <Feed
          //passes the entire user object for logged in user
          user={appController.users.reduce((acc, val) => {
            if (val.username === currentUsername) {
              acc = val;
            }
            return acc;
          })}
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
