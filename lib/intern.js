const inquirer = require("inquirer");
const jes = require("jest");
const fs = require("fs");
const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    super(school);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}
