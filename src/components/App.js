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
  const [userIndex, updateUserIndex] = useState(5);
  const [liked, updateLiked] = useState(appController.users[5].liked);

  function userChange() {
    updateCurrentUsername(appController.currentUser);
    updateUserIndex(
      appController.users.findIndex(
        (val) => val.username === appController.currentUser
      )
    );
    updateLiked(appController.users[userIndex].liked.concat());
  }

  function handleLike(id) {
    appController.users[userIndex].like(id);
    updateLiked(appController.users[userIndex].liked.concat());
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
          user={appController.users[userIndex]}
          //passes an array of all postcards to feed
          allPostcards={appController.users
            .map((user) => user.postcards)
            .reduce((prev, curr) => prev.concat(curr))}
          handleLike={handleLike}
          liked={liked}
        />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
