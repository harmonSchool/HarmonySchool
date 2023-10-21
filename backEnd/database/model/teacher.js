const connection = require("../index")

const add = (teacherData, callback) => {
  const sql = `INSERT INTO teachers SET ?`;
  connection.query(sql, teacherData, function (error, results) {
      callback(error, results);
  });
};


  const put = (idteacher, updatedData, callback) => {
    const sql = `UPDATE teachers SET ? WHERE idteacher = ?`;
    connection.query(sql, [updatedData, idteacher], function(error, results) {
        callback(error, results);
    });
  };

  const remove = (idusers, callback) => {
    const sql = `DELETE FROM teachers WHERE idteacher = ?`;
    connection.query(sql, [idusers], function(error, results) {
        callback(error, results);
    });
  };

  const getAll = (callback) => {
    const sql = `SELECT * FROM teachers`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  };
  
 
  const getTeacherByFirstClass = (className, callback) => {
    const sql = `SELECT * FROM teachers WHERE class = ?`;
    console.log('SQL Query:', sql);
    connection.query(sql, [className], function (error, results) {
      console.log('SQL Results:', results); // Log the SQL results
      callback(error, results);
    });
  };

  const getTeacherBySecondClass = (className, callback) => {
    const sql = `SELECT * FROM teachers WHERE class = ?`;
    console.log('SQL Query:', sql); 
    connection.query(sql, [className], function (error, results) {
      console.log('SQL Results:', results); 
      callback(error, results);
    });
  };

  const getTeacherBySubjectAndClass = (subjectName, className, callback) => {
    const sql = `SELECT * from harmony.teachers t, harmony.subject s
WHERE
    t.subject_idsubject=s.idsubject
    and s.name= ?
    and t.class=?
    `
    console.log('SQL Query:', sql);
    connection.query(sql, [subjectName, className], function (error, results) {
      console.log('SQL Results:', results); 
      callback(error, results);
    });
  };


  
  
  
  module.exports = {
    add,
    put,
    remove,
    getTeacherByFirstClass,
    getAll,
    getTeacherBySecondClass,
    getTeacherBySubjectAndClass
  };
  
  
  
  
  
  