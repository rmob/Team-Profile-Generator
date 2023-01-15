const Employee = require('../lib/Employee')

describe("Employee", () => {
  describe("Employee", () => {
    it("should create a new instance of the Employee class and the name porperty should be accessible by calling getName() on the new class instance", () => {
        
      const employeeInstance = new Employee('Moe', '2', 'moe@gmail.com', 'UT Austin')

      expect(employeeInstance.getName()).toEqual('Moe');
    });

    
  });

  describe("Employee", () => {
    it("should create a new instance of the Employee class and the getEmail() method should return the value of email", () => {
        
      const employeeInstance = new Employee('Moe', '2', 'moe@gmail.com', '10')

      expect(employeeInstance.getEmail()).toEqual('moe@gmail.com');
    });

    
  });
})
