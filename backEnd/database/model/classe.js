const connection = require("../index")

const add = (ClassData, callback) => {
    const sql = `INSERT INTO classes SET ?`;
    connection.query(sql, ClassData, function (error, results) {
      callback(error, results);
    });
  };

  const put = (idclasses, updatedData, callback) => {
    const sql = `UPDATE classes SET ? WHERE idclasses = ?`;
    connection.query(sql, [updatedData, idclasses], function(error, results) {
        callback(error, results);
    });
  };

  const remove = (idclasses, callback) => {
    const sql = `DELETE FROM classes WHERE idclasses = ?`;
    connection.query(sql, [idclasses], function(error, results) {
        callback(error, results);
    });
  };

  const getAll = (callback) => {
    const sql = `SELECT * FROM classes`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  };
  
  const getOne = (classId, callback) => {
    const sql = `SELECT imageEmploi FROM classes WHERE idclasses = ?`;
    connection.query(sql, [classId], function (error, results) {
      callback(error, results);
    });
  };

  

 
  
  module.exports = {
    add,
    put,
    remove,
    getAll,
    getOne,
   
  };
  
  
  
  
  
  