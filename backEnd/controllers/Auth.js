const {login,createUser} = require("../database/model/Auth");



const loginController = (req, res) => {
    const { email, password } = req.body;
  
  login(email, password, (error, results) => {
      if (error) {
        console.error("User not found", error);
        res.status(500).json(error);
      } else {
        console.log("User login successfully.");
        res.status(201).json(results);
      }
    });
  };


const createAuthController = (req, res) => {
    const { email, password ,role} = req.body;
    createUser(email, password , role, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json(error);
      } else {
        console.log("User Create successfully.");
        res.status(201).json(results);
      }
    });
  };


  module.exports = {
    loginController,
    createAuthController
};