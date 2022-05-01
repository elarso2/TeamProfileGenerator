const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const Employee = require("./employee");

class Manager extends Employee {
  constructor(office) {
    super(office);
    this.office = office;
  }

  getOffice() {
    return this.office;
  }

  getRole() {
    return "Manager";
  }
}
