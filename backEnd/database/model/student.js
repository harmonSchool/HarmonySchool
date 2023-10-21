const connection = require("../index")

const add = (StudenttData, callback) => {
  const sql = `INSERT INTO Student SET ?`;
  connection.query(sql, StudenttData, function (error, results) {
      callback(error, results);
  });
};


  const put = (idStudent, updatedData, callback) => {
    const sql = `UPDATE Student SET ? WHERE idStudent = ?`;
    connection.query(sql, [updatedData, idStudent], function(error, results) {
        callback(error, results);
    });
  };

  const remove = (idStudent, callback) => {
    const sql = `DELETE FROM Student WHERE idStudent = ?`;
    connection.query(sql, [idStudent], function(error, results) {
        callback(error, results);
    });
  };

  
  const getAll = (callback) => {
    const sql = `SELECT * FROM Student`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  };

  const getStudentsInClass = (idclasses, callback) => {
    const sql = `SELECT * FROM Student WHERE classes_idclasses = ?`;
    connection.query(sql, [idclasses], function (error, results) {
      callback(error, results);
    });
  };

  const getOneStudent = (idStudent, callback) => {
    const sql = 'SELECT * FROM Student WHERE idStudent = ?';
    ;
    connection.query(sql, [idStudent], function (error, results) {
      callback(error, results);
    });
  };

  

  const getStudentsByUser = (idStudent, callback) => {
    const sql = `SELECT * FROM Student WHERE users_idusers = ?`;
    connection.query(sql, [idStudent], function (error, results) {
      callback(error, results);
    });
  };

  




  
  module.exports = {
    add,
    put,
    remove,
    getAll,
    getStudentsInClass,getOneStudent
    
    
  };
  
  
  
  
  
  