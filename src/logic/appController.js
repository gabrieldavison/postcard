import User from "./User";
import mockUsers from "./mockUsers";
const appController = (function () {
  let users = [];
  let currentUser = undefined;

  const addUser = function (username, password) {
    const newUser = new User(username, password);
    //checks newUser against users array to make sure username isnt taken
    if (users.map((val) => val.username).includes(newUser.username)) {
      return "username taken";
    }
    users.push(newUser);
  };

  const login = function (username, password) {
    if (!users.map((val) => val.username).includes(username)) {
      return "user does not exist";
    }
    if (
      users.filter((val) => val.username === username)[0].password !== password
    ) {
      return "username and password do not match";
    }

    appController.currentUser = username;
  };

  const logout = function () {
    appController.currentUser = undefined;
  };

  return {
    users: users,
    currentUser: currentUser,
    addUser: addUser,
    login: login,
    logout: logout,
  };
})();

export default appController;
