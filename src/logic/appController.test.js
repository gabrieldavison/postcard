import appController from "./appController";

describe("tests initiation", () => {
  test("has users array", () => {
    expect(typeof appController.users).toBe("object");
  });

  test("currentUser is undefined on initiation", () => {
    expect(appController.currentUser).toBe(undefined);
  });
});

describe("tests addUser", () => {
  appController.addUser("user1", "password");
  test("addUser adds new user to users array", () => {
    expect(appController.users.length > 0).toBe(true);
  });
  test("addUser returns error if username is already taken", () => {
    expect(appController.addUser("user1", "password")).toBe("username taken");
  });
  test("addUser adds second valid user to array if username not taken", () => {
    appController.addUser("user2", "password");
    expect(appController.users[1].username).toBe("user2");
  });
});

describe("tests login", () => {
  test("login updates currentUser", () => {
    appController.addUser("user1", "password");
    appController.login("user1", "password");
    expect(appController.currentUser).toBe("user1");
  });

  test("login returns error if user does not exist", () => {
    expect(appController.login("user10", "wrongPassword")).toBe(
      "user does not exist"
    );
  });

  test("login returns error if username and password do not match", () => {
    expect(appController.login("user1", "wrongPassword")).toBe(
      "username and password do not match"
    );
  });
});

describe("tests logout", () => {
  test("logout sets user to undefined", () => {
    appController.login("user1", "password");
    appController.logout();
    expect(appController.currentUser).toBe(undefined);
  });
});
