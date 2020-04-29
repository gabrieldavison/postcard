import Postcard from "./Postcard";
const testcard = new Postcard("owner", "text", "1");

describe("test parameters", () => {
  test("postcard has owner", () => {
    expect(testcard.owner).toBe("owner");
  });

  test("postcard has text", () => {
    expect(testcard.text).toBe("text");
  });

  test("postcard has location", () => {
    expect(testcard.location).toBe("location");
  });
});

describe("test id", () => {
  const testcard2 = new Postcard("owner", "text");
  test("has ID number", () => {
    expect(testcard.id).toBe("1");
  });
});

describe("test date", () => {
  test("date is a date object", () => {
    expect(testcard.date instanceof Date).toBe(true);
  });
});
