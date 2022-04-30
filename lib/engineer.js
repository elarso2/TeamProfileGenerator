const inquirer = require("inquirer");
const jes = require("jest");
const fs = require("fs");
const employee = require("./employee");

class Engineer extends Employee {
  constructor(gitHub) {
    this.gitHub = gitHub;
  }

  getGithub() {
    return this.gitHub;
  }

  getRole() {
    return "Engineer";
  }
}
