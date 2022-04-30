const inquirer = require("inquirer");
const jes = require("jest");
const fs = require("fs");
const employee = require("./employee");

class Manager extends Employee {
  constructor(office) {
    this.office = office;
  }

  getOffice() {
    return this.office;
  }

  getRole() {
    return "Manager";
  }
}
