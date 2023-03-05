const Manager = require("../src/Manager");
const Employee = require("../src/Employeeclass");

describe("Manager", () => {
  describe("constructor", () => {
    it("should create an object with name, id, email, and officeNumber properties", () => {
      const manager = new Manager("Yingge", 123, "Yingge@xxxx.com", 321);
      expect(manager).toEqual({
        name: "Yingge",
        id: 123,
        email: "Yingge@xxxx.com",
        officeNumber: 321,
      });
    });
  });
});
