const Engineer = require("../lib/engineer");

describe("Engineer Test", () => {
  it("should create an extension of the engineer class, with a GitHub username", () => {
    const engineer = new Engineer("Matt", 5, "matt@email.com", "mattCoolCodes");
    expect(engineer.name).toEqual("Matt");
    expect(engineer.id).toEqual(5);
    expect(engineer.email).toEqual("matt@email.com");
    expect(engineer.gitHub).toEqual("mattCoolCodes");
  });
});
