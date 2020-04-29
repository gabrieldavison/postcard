import User from "./User";

const testUser = new User("username", "password");

describe("tests constructor", () => {
  test("User has username", () => {
    expect(testUser.username).toBe("username");
  });

  test("User has password", () => {
    expect(testUser.password).toBe("password");
  });

  test("User has postcards array", () => {
    expect(typeof testUser.postcards).toEqual("object");
  });

  test("User has liked array", () => {
    expect(typeof testUser.liked).toEqual("object");
  });

  test("User has followed array", () => {
    expect(typeof testUser.followed).toEqual("object");
  });
});

describe("tests addPostcard", () => {
  testUser.addPostcard("text");
  test("adds postcard to postcards array", () => {
    expect(testUser.postcards.length).toBe(1);
  });

  test("postcard has correct owner", () => {
    expect(testUser.postcards[0].owner).toBe("username");
  });

  test("postcard has text", () => {
    expect(testUser.postcards[0].text).toBe("text");
  });
  test("postcard has id", () => {
    expect(testUser.postcards[0].id).toBe("username_0");
  });
});

describe("tests deletePostcard", () => {
  test("removes postcard from postcards array", () => {
    testUser.deletePostcard("username_0");
    expect(testUser.postcards.length).toBe(0);
  });
});

describe("tests like", () => {
  test("adds liked image id to liked array", () => {
    testUser.like("username_0");
    expect(testUser.liked[0]).toBe("username_0");
  });
});

describe("tests unlike", () => {
  test("removes image from liked array", () => {
    testUser.unlike("username_0");
    expect(testUser.liked[0]).toBe(undefined);
  });
});

describe("tests follow", () => {
  test("adds username to followed array", () => {
    testUser.follow("username");
    expect(testUser.followed[0]).toBe("username");
  });
});

describe("tests unfollow", () => {
  test("removes image from liked array", () => {
    testUser.unfollow("username");
    expect(testUser.followed[0]).toBe(undefined);
  });
});
