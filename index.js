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
    name: "office",
    message: "What is the team manager's office number?",
  },
];

const questionEng = [
  {
    type: "input",
    name: "github",
    message: "What is this engineer's GitHub username?",
  },
];

const questionInt = [
  {
    type: "input",
    name: "school",
    message: "What school does this intern attend?",
  },
];

function init() {
  basic();
}

let memRole = "";
function basic() {
  inquirer
    .prompt(questionsEmployee)

    .then(function (data) {
      if (data.role == "Manager") {
        inquirer.prompt(questionMan).then(function (data2) {
          memRole = data2.office;
          nextMem();
        });
      } else if (data.role == "Engineer") {
        inquirer.prompt(questionEng).then(function (data2) {
          memRole = data2.github;
          nextMem();
        });
      } else {
        inquirer.prompt(questionInt).then(function (data2) {
          memRole = data2.school;
          nextMem();
        });
      }
      // nextMem();
    });
}

function nextMem() {
  inquirer
    .prompt({
      type: "list",
      name: "newMem",
      message: "Would you like to add another team member?",
      choices: ["Yes, add another member.", "No, my team is complete."],
    })

    .then(function (data) {
      if (data.newMem == "Yes, add another member.") {
        basic();
      } else {
        return "Team building complete.";
      }
    });
}

function type(data) {}

init();
type();
