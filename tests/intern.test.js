const Intern = require("../lib/intern");

describe("Intern Test", () => {
  it("should create an extension of the employee class, with a school", () => {
    const intern = new Intern(
      "Matt",
      5,
      "matt@email.com",
      "University of Washington"
    );
    expect(intern.name).toEqual("Matt");
    expect(intern.id).toEqual(5);
    expect(intern.email).toEqual("matt@email.com");
    expect(intern.school).toEqual("University of Washington");
  });
});
