import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import appController from "../logic/appController";
import mockUsers from "../logic/mockUsers";
import Feed from "./Feed";
import { Link, Router, navigate } from "@reach/router";
import UserComponent from "./UserComponent";
import UserNotFound from "./UserNotFound";
import Upload from "./Upload";
//creates mock user accounts
mockUsers();
const App = () => {
  //username of current user
  const [currentUsername, updateCurrentUsername] = useState(undefined);
  const [userIndex, updateUserIndex] = useState();

  const [liked, updateLiked] = useState();
  const [followed, updateFollowed] = useState();
  const [searchedUser, updateSearchedUser] = useState("");
  const [navigateSearchedUser, updateNavigateSearchedUser] = useState("");

  function logout() {
    console.log("logout");
    appController.logout;
    updateCurrentUsername(undefined);
    updateUserIndex();
    updateLiked();
    updateFollowed();
    navigate("/");
  }

  function handleSearch() {
    if (
      !appController.users.map((val) => val.username).includes(searchedUser)
    ) {
      navigate("/usernotfound");
    } else {
      updateNavigateSearchedUser(searchedUser);
      navigate("/searchuser");
    }
  }

  function handleLoginUser(username, password) {
    appController.login(username, password);

    updateCurrentUsername(appController.currentUser);

    updateUserIndex(
      appController.users.findIndex(
        (val) => val.username === appController.currentUser
      )
    );

    updateLiked(
      appController.users
        .find((val) => (val.username = username))
        .liked.concat()
    );

    updateFollowed(
      appController.users
        .find((val) => (val.username = username))
        .followed.concat()
    );
  }

  function userChange() {
    updateCurrentUsername(appController.currentUser);
    updateUserIndex(
      appController.users.findIndex(
        (val) => val.username === appController.currentUser
      )
    );
    updateLiked(appController.users[userIndex].liked.concat());
    updateFollowed(appController.users[userIndex].followed.concat());
    console.log(currentUsername);
    console.log(userIndex);
  }

  function handleLike(id) {
    appController.users[userIndex].like(id);
    updateLiked(appController.users[userIndex].liked.concat());
  }

  function handleFollow(user) {
    appController.users[userIndex].follow(user);
    updateFollowed(appController.users[userIndex].followed.concat());
  }

  function handleAddPostcard(text) {
    console.log(appController.users[userIndex].postcards);
    appController.users[userIndex].addPostcard(text);
    console.log(appController.users[userIndex].postcards);
  }

  return (
    <div>
      {currentUsername === undefined ? (
        <Login
          loginUser={handleLoginUser}
          addUser={appController.addUser}
          authenticate={appController.authenticate}
          checkUsername={appController.checkUsername}
        />
      ) : (
        <div>
          <Router>
            <Feed
              logout={logout}
              currentUsername={currentUsername}
              handleSearch={handleSearch}
              updateSearchedUser={updateSearchedUser}
              path="/"
              allUsers={appController.users}
              user={appController.users[userIndex]}
              //passes an array of all postcards to feed
              allPostcards={appController.users
                .map((user) => user.postcards)
                .reduce((prev, curr) => prev.concat(curr))}
              handleLike={handleLike}
              liked={appController.users[userIndex].liked}
              followed={appController.users[userIndex].followed}
            />
            {/* Logged in user component */}
            <UserComponent
              handleSearch={handleSearch}
              updateSearchedUser={updateSearchedUser}
              path="/user"
              currentUsername={currentUsername}
              user={appController.users[userIndex]}
              allUsers={appController.users}
              allPostcards={appController.users
                .map((user) => user.postcards)
                .reduce((prev, curr) => prev.concat(curr))}
              handleLike={handleLike}
              liked={appController.users[userIndex].liked}
            />
            {/* Component for searched user */}
            <UserComponent
              handleSearch={handleSearch}
              updateSearchedUser={updateSearchedUser}
              path="/searchuser"
              currentUsername={currentUsername}
              user={appController.users.find(
                (val) => val.username === navigateSearchedUser
              )}
              allUsers={appController.users}
              allPostcards={appController.users
                .map((user) => user.postcards)
                .reduce((prev, curr) => prev.concat(curr))}
              handleLike={handleLike}
              liked={liked}
              handleFollow={handleFollow}
              followed={followed}
            />
            {/* User not found component */}
            <UserNotFound
              currentUsername={currentUsername}
              path="usernotfound"
            />
            <Upload
              path="upload"
              currentUsername={currentUsername}
              handleAddPostcard={handleAddPostcard}
              user={appController.users[userIndex]}
            />
          </Router>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
