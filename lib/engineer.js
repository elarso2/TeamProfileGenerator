const inquirer = require("inquirer");
const jes = require("jest");
const fs = require("fs");
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(gitHub) {
    super(gitHub);
    this.gitHub = gitHub;
  }

  getGithub() {
    return this.gitHub;
  }

  getRole() {
    return "Engineer";
  }
}
