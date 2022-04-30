const inquirer = require("inquirer");
const jes = require("jest");
const fs = require("fs");

//Basic Employee Class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

function init() {
  inquirer.prompt();
}

init();

module.exports = Employee;
