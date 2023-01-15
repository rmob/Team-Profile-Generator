const Intern = require('../lib/Intern')

describe("Intern", () => {
  describe("Intern", () => {
    it("it should create a new instance of the Intern class and the school porperty should be accessible by calling getSchool() on the new class instance", () => {
        
      const internInstance = new Intern('Carl', '2', 'carl@gmail.com', 'UT Austin')

      expect(internInstance.getSchool()).toEqual('UT Austin');
    });

    
  });

  describe("Intern", () => {
    it("it should create a new instance of the Intern class and the getRole() method should return 'Intern'", () => {
        
      const internInstance = new Intern('Carl', '2', 'carl@gmail.com', '10')

      expect(internInstance.getRole()).toEqual('Intern');
    });

    
  });
})