const connection = require("../index");

const insertUserLogin = (email, password, callback) => {
    const sql = `INSERT INTO login (email, password) VALUES (?, ?)`;
    connection.query(sql, [email, password], (error, results) => {
      callback(error, results);
    });
  };

  const insertTeacherLogin = (email, password, callback) => {
    const sql = `INSERT INTO login (email, password, role) VALUES (?, ?, 1)`;
    connection.query(sql, [email, password], (error, results) => {
      callback(error, results);
    });
  };
  
 
  module.exports = {
    insertUserLogin,
    insertTeacherLogin,
  };