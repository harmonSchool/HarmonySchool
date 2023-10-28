const connection = require("../index")

const add = (StudenttData, callback) => {
  const sql = `INSERT INTO Student SET ?`;
  connection.query(sql, StudenttData, function (error, results) {
      callback(error, results);
  });
};


function getStudentIdByUsername(First_name, callback) {
  const query = "SELECT idStudent FROM Student WHERE First_name = ?";
  connection.query(query, [First_name], (err, results) => {
    if (err) {
      console.error("Error retrieving student ID by username: " + err);
      callback(err, null);
    } else if (results.length === 0) {
      callback("Student not found", null);
    } else {
      callback(null, results[0].idStudent); // Corrected to idStudent
    }
  });
}




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

  const getStudentsByClass = (className, callback) => {
    const sql = 'SELECT * FROM Student WHERE class = ?';
    connection.query(sql, [className], function (error, results) {
      callback(error, results);
    });
  };

  const getStudentsByClass2 = (className, callback) => {
    const sql = 'SELECT * FROM Student WHERE class = ?';
    connection.query(sql, [className], function (error, results) {
      callback(error, results);
    });
  };
  

  const getStudentsByClass3 = (className, callback) => {
    const sql = 'SELECT * FROM Student WHERE class = ?';
    connection.query(sql, [className], function (error, results) {
      callback(error, results);
    });
  };

  const getStudentsByClass4 = (className, callback) => {
    const sql = 'SELECT * FROM Student WHERE class = ?';
    connection.query(sql, [className], function (error, results) {
      callback(error, results);
    });
  };

  const getStudentsByClass5 = (className, callback) => {
    const sql = 'SELECT * FROM Student WHERE class = ?';
    connection.query(sql, [className], function (error, results) {
      callback(error, results);
    });
  };

  const getStudentsByClass6 = (className, callback) => {
    const sql = 'SELECT * FROM Student WHERE class = ?';
    connection.query(sql, [className], function (error, results) {
      callback(error, results);
    });
  };






  




  
  module.exports = {
    add,
    put,
    remove,
    getAll,
    getStudentsInClass,getOneStudent,
    getStudentsByUser ,
    getStudentsByClass,
    getStudentsByClass2,
    getStudentsByClass3,
    getStudentsByClass4 ,
    getStudentsByClass5 ,
    getStudentsByClass6 ,getStudentIdByUsername
    
    
    
  };
  
  
  
  
  
  