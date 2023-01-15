const Manager = require('../lib/Manager')

describe("Manager", () => {
  describe("Manager", () => {
    it("it should create a new instance of the Manager class and the officeNumber porperty should be accessible by calling getOfficeNumber() on the new class instance", () => {
        
      const managerInstance = new Manager('Lisa', '2', 'lisa@gmail.com', '10')

      expect(managerInstance.getOfficeNumber()).toEqual('10');
    });

    
  });

  describe("Manager", () => {
    it("it should create a new instance of the Manager class and the getRole() method should return 'Manager'", () => {
        
      const managerInstance = new Manager('Lisa', '2', 'lisa@gmail.com', '10')

      expect(managerInstance.getRole()).toEqual('Manager');
    });

    
  });
})
