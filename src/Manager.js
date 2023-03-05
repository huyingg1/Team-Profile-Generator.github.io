const Employee = require("./Employeeclass");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
}
module.exports = Manager;
