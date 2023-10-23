const {insertUserLogin,insertTeacherLogin,} = require("../database/model/login")


const insertUserLoginCon = (req, res) => {
  const { email, password } = req.body;

insertUserLogin(email, password, (error, results) => {
    if (error) {
      console.error("Error inserting user login data:", error);
      res.status(500).json(error);
    } else {
      console.log("User login data inserted successfully.");
      res.status(201).json(results);
    }
  });
};

const insertTeacherLoginCo = (req, res) => {
  const { email, password } = req.body;

 insertTeacherLogin(email, password, (error, results) => {
    if (error) {
      console.error("Error inserting teacher login data:", error);
      res.status(500).json(error);
    } else {
      console.log("Teacher login data inserted successfully.");
      res.status(201).json(results);
    }
  });
};


module.exports = {
    insertUserLoginCon,
    insertTeacherLoginCo
};
