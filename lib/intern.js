const inquirer = require("inquirer");
const jes = require("jest");
const fs = require("fs");
const employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}
