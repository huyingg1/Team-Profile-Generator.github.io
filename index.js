const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./src/Employeeclass");
const Engineer = require("./src/Engineer");
const Manager = require("./src/Manager");
const Intern = require("./src/Intern");
const generateHTML = require("./generatehtml");

const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email address?",
  },
];

const managerQuestionP1 = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email address?",
  },
];

const managerQuestions = [
  ...managerQuestionP1,
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];

const engineerQuestions = [
  ...employeeQuestions,
  {
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub username?",
  },
];

const internQuestions = [
  ...employeeQuestions,
  {
    type: "input",
    name: "school",
    message: "What school does the intern attend?",
  },
];

function createManager() {
  console.log("Please enter the following information for the team manager:");
  return new Promise((resolve, reject) => {
    inquirer
      .prompt(managerQuestions)
      .then((answers) => {
        resolve(
          new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
          )
        );
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function createEngineer() {
  console.log("Please enter the following information for an engineer:");
  return new Promise((resolve, reject) => {
    inquirer
      .prompt(engineerQuestions)
      .then((answers) => {
        resolve(
          new Engineer(answers.name, answers.id, answers.email, answers.github)
        );
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function createIntern() {
  console.log("Please enter the following information for an intern:");
  return new Promise((resolve, reject) => {
    inquirer
      .prompt(internQuestions)
      .then((answers) => {
        resolve(
          new Intern(answers.name, answers.id, answers.email, answers.school)
        );
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function main() {
  let manager;

  createManager()
    .then((managerObj) => {
      manager = managerObj;
      const team = [manager];

      function addEmployee() {
        inquirer
          .prompt({
            type: "list",
            name: "employeeType",
            message: "What type of employee would you like to add?",
            choices: ["Engineer", "Intern", "Finish building team"],
          })
          .then((answers) => {
            switch (answers.employeeType) {
              case "Engineer":
                createEngineer()
                  .then((engineer) => {
                    team.push(engineer);
                    addEmployee();
                  })
                  .catch((err) => {
                    console.error(err);
                  });
                break;

              case "Intern":
                createIntern()
                  .then((intern) => {
                    team.push(intern);
                    addEmployee();
                  })
                  .catch((err) => {
                    console.error(err);
                  });
                break;

              default:
                console.log("Team building complete!");
                console.log(team);
                generateHTML(team);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }

      addEmployee();
    })
    .catch((err) => {
      console.error(err);
    });
}

main();
