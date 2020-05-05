import mockUsers from "./mockUsers";
import appController from "./appController";

mockUsers();
test("tests 6 users have been created", () => {
  expect(appController.users.length).toBe(6);
});

test("5 of the users have 5 images", () => {
  for (let i = 0; i < 5; i += 1) {
    expect(appController.users[i].postcards.length).toBe(5);
  }
});

test("user 6 follows the other 5 users", () => {
  expect(appController.users[5].followed.length).toBe(5);
});

test("first 3 users have liked 3 images", () => {
  expect(appController.users[0].liked.length).toBe(3);
  expect(appController.users[0].liked[1]).toBe("dianearbus_1");
});
