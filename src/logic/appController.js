import User from "./User";
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
    currentUser = username;
  };

  return {
    addUser: addUser,
    login: login,
    users: users,
    currentUser: currentUser,
  };
})();

export default appController;
