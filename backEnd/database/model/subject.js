const connection = require("../index")

const add = (data, callback) => {
  const { name, classes_idclasses, teachers_idteacher } = data;
  const sql = 'INSERT INTO subject (name, classes_idclasses, teachers_idteacher) VALUES (?, ?, ?)';
  connection.query(sql, [name, classes_idclasses, teachers_idteacher], function (error, results) {
    callback(error, results);
  });
};



  const put = (idsubject, updatedData, callback) => {
    const sql = `UPDATE subject SET ? WHERE idsubject = ?`;
    connection.query(sql, [updatedData, idsubject], function(error, results) {
        callback(error, results);
    });
  };

  const remove = (idsubject, callback) => {
    const sql = `DELETE FROM subject WHERE idsubject = ?`;
    connection.query(sql, [idsubject], function(error, results) {
        callback(error, results);
    });
  };

  
  const getAll = (callback) => {
    const sql = `SELECT * FROM subject`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  };

  const getSubjectInClass = (idclasses, callback) => {
    const sql = `SELECT * FROM Student WHERE classes_idclasses = ?`;
    connection.query(sql, [idclasses], function (error, results) {
      callback(error, results);
    });
  };

  const getSubject = (idStudent, callback) => {
    const sql = 'SELECT * FROM subject WHERE idsubject = ?';
    ;
    connection.query(sql, [idStudent], function (error, results) {
      callback(error, results);
    });
  };

  





  




  
  module.exports = {
    add,
    put,
    remove,
    getAll,
    getSubjectInClass,
    getSubject
  };
  
  
  
  
  
  