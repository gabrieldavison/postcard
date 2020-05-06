import User from "./User";
import mockUsers from "./mockUsers";
const appController = (function () {
  let users = [];
  let currentUser = undefined;

  const addUser = function (username, password) {
    const newUser = new User(username, password);
    users.push(newUser);
  };

  const checkUsername = function (username) {
    //checks newUser against users array to make sure username isnt taken
    if (users.map((val) => val.username).includes(username)) {
      return [false, "username taken"];
    } else return [true];
  };

  const authenticate = function (username, password) {
    if (!users.map((val) => val.username).includes(username)) {
      return [false, "user does not exist"];
    } else if (
      users.filter((val) => val.username === username)[0].password !== password
    ) {
      return [false, "username and password do not match"];
    } else return [true];
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
    authenticate: authenticate,
    checkUsername: checkUsername,
  };
})();

export default appController;
