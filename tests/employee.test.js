const Employee = require("../lib/employee");

describe("Employee Test", () => {
  it("should create an object with values for id, name, and email", () => {
    const employee = new Employee("Matt", 5, "matt@email.com");
    expect(employee.name).toEqual("Matt");
    expect(employee.id).toEqual(5);
    expect(employee.email).toEqual("matt@email.com");
  });
});
