import appController from "./appController";
function mockUsers() {
  //names for each of the 6 users
  const userNames = [
    "martinparr",
    "dianearbus",
    "joelmeyerowitz",
    "fredherzog",
    "robertfrank",
    "gabrieldavison",
  ];
  //generates a user object for each name in the array
  userNames.forEach((item) => {
    appController.addUser(item, "password");
  });
  //Adds 5 images each to the first five users
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j++) {
      appController.users[i].addPostcard(
        "This is a postcard with some dummy text that I am using as a placeholder."
      );
    }
  }
  //loop has gabrielDavison follow other 5 users
  for (let i = 0; i < 5; i++) {
    appController.users[5].follow(userNames[i]);
  }

  for (let i = 0; i < 3; i++) {
    appController.users[5].like(`martinparr_${i}`);
  }
  // loop gets first 3 users to like the first 3 images of the user in front
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      appController.users[i].like(
        `${appController.users[i + 1].username}_${j}`
      );
    }
  }
}

export default mockUsers;
