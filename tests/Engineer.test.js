const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
  describe("Engineer", () => {
    it("it should create a new instance of the Engineer class and the github porperty should be accessible by calling getGithub() on the new class instance", () => {
        
      const engineerInstance = new Engineer('Lenny', '2', 'lenny@gmail.com', 'lennyshub')

      expect(engineerInstance.getGithub()).toEqual('lennyshub');
    });

    
  });

  describe("Engineer", () => {
    it("it should create a new instance of the Engineer class and the getRole() method should return 'Engineer'", () => {
        
      const engineerInstance = new Engineer('Lenny', '2', 'lenny@gmail.com', 'lennyshub')

      expect(engineerInstance.getRole()).toEqual('Engineer');
    });

    
  });
})