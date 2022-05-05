const Manager = require("../lib/manager");

describe("Manager Test", () => {
  it("should create an extension of the employee class, with an office number", () => {
    const manager = new Manager("Matt", 5, "matt@email.com", 12);
    expect(manager.name).toEqual("Matt");
    expect(manager.id).toEqual(5);
    expect(manager.email).toEqual("matt@email.com");
    expect(manager.office).toEqual(12);
  });
});
