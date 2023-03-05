const Intern = require("../src/Intern");
const Employee = require("../src/Employeeclass");

describe("Intern", () => {
  describe("constructor", () => {
    it("should create an object with name, id, email, and school properties", () => {
      const intern = new Intern("Yingge", 123, "Yingge@xxxx.com", "Uoft");
      expect(intern).toEqual({
        name: "Yingge",
        id: 123,
        email: "Yingge@xxxx.com",
        school: "Uoft",
      });
    });
  });
});
