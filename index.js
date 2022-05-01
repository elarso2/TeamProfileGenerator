const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Create = require("./createHTML");

// Questions that get asked for all employees
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

// Office number question for manager
const questionMan = [
  {
    type: "input",
    name: "office",
    message: "What is the team manager's office number?",
  },
];

// GitHub profile question for engineer
const questionEng = [
  {
    type: "input",
    name: "github",
    message: "What is this engineer's GitHub username?",
  },
];

// School question for intern
const questionInt = [
  {
    type: "input",
    name: "school",
    message: "What school does this intern attend?",
  },
];

// function to trigger the basic questions function
function init() {
  basic();
}

// variable for the role selected for a member
let memRole = "";

// Array containing each team member created
const teamMems = [];

// Asks the 4 questions for each employee
function basic() {
  inquirer
    .prompt(questionsEmployee)

    // asking final specific question depending on employee role
    // adds the array of that employee's information to the teamMems array
    // calls the nextMem function
    .then(function (data) {
      if (data.role == "Manager") {
        inquirer.prompt(questionMan).then(function (data2) {
          memRole = data2.office;
          teamMems.push([data.name, data.role, data.id, data.email, memRole]);
          nextMem();
        });
      } else if (data.role == "Engineer") {
        inquirer.prompt(questionEng).then(function (data2) {
          memRole = data2.github;
          teamMems.push([data.name, data.role, data.id, data.email, memRole]);
          nextMem();
        });
      } else {
        inquirer.prompt(questionInt).then(function (data2) {
          memRole = data2.school;
          teamMems.push([data.name, data.role, data.id, data.email, memRole]);
          nextMem();
        });
      }
      // nextMem();
    });
}

// Allows user to add a new member or it will exit the program and will trigger the writing function in createHTML.js
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
        console.log(teamMems);
      }
    });
}

function type(data) {}

init();
type();
