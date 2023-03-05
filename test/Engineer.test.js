const Engineer = require("../src/Engineer");
const Employee = require("../src/Employeeclass");

describe("Engineer", () => {
  describe("constructor", () => {
    it("should create an object with name, id, email, and github properties", () => {
      const engineer = new Engineer(
        "Yingge",
        123,
        "Yingge@xxxx.com",
        "huyingg1"
      );
      expect(engineer).toEqual({
        name: "Yingge",
        id: 123,
        email: "Yingge@xxxx.com",
        github: "huyingg1",
      });
    });
  });
});
