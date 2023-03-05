const fs = require("fs");
const Engineer = require("./src/Engineer");
const Manager = require("./src/Manager");
const Intern = require("./src/Intern");
function generateHTML(team) {
  // Create a table row for each team member
  const rows = team
    .map((employee) => {
      let specialProperty = "";
      let specialValue = "";

      if (employee instanceof Manager) {
        role = "Manager";
        specialProperty = "Office number";
        specialValue = employee.officeNumber;
      } else if (employee instanceof Engineer) {
        role = "Engineer";
        specialProperty = "GitHub username";
        specialValue = `<a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a>`;
      } else if (employee instanceof Intern) {
        role = "Intern";
        specialProperty = "School";
        specialValue = employee.school;
      }

      return `
        <tr>
        <td>${role}</td>
          <td>${employee.name}</td>
          <td>${employee.id}</td>
          <td><a href="mailto:${employee.email}">${employee.email}</a></td>
          <td>${specialProperty}</td>
          <td>${specialValue}</td>
        </tr>
      `;
    })
    .join("");

  // Generate the HTML content
  const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>My Team</title>
          <style>
            table {
              border-collapse: collapse;
              width: 100%;
            }
  
            th, td {
              text-align: left;
              padding: 8px;
            }
  
            th {
              background-color: #0052CC;
              color: white;
            }
  
            tr:nth-child(even) {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <h1>My Team</h1>
          <table>
            <thead>
              <tr>
                <th>Role</th>
                <th>Name</th>
                <th>ID</th>
                <th>Email</th>
                <th>Special Property</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </body>
      </html>
    `;

  // Save the HTML content to disk
  fs.writeFile("team.html", html, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Team information saved to team.html");
    }
  });
}

module.exports = generateHTML;
