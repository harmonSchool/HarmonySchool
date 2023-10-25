const conn = require("../index");


const login = (email, password, callback) => {
    const sql = `SELECT * FROM login WHERE email = ? and password = ?`;
    conn.query(sql, [email, password], (error, results) => {
      callback(error, results);
    });
};


const createUser = (email,password,role,callback) => {
    const sql = `INSERT INTO login (email, password,role) VALUES (?, ? , ?)`;
    conn.query(sql, [email, password,role], (error, results) => {
      callback(error, results);
    });
};


module.exports = {
    login,
    createUser
};
