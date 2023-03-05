const Employee = require("../src/Employeeclass");

describe("Employee", () => {
  describe("constructor", () => {
    it("should create an object with name, id, and email properties", () => {
      const employee = new Employee("Yingge", 123, "Yingge@xxxx.com");
      expect(employee).toEqual({
        name: "Yingge",
        id: 123,
        email: "Yingge@xxxx.com",
      });
    });
  });
});
