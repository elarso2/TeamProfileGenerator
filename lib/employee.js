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
}
