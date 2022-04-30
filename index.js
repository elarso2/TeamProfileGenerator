const inquirer = require("inquirer");
const jes = require("jest");
const fs = require("fs");

const questionsEmployee = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email?",
  },
  {
    type: "list",
    name: "role",
    message: "What is their role?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const questionMan = [
  {
    type: "input",
    name: "officeNum",
    message: "What is the team manager's office number?",
  },
];

const questionIntern = [
  {
    type: "input",
    name: "ghProfile",
    message: "What is this intern's GitHub username?",
  },
];

const questionStu = [
  {
    type: "input",
    name: "stuSchool",
    message: "What school does this student attend?",
  },
];
