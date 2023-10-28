const conn = require("../index")
const bcrypt = require('bcrypt')
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '10697',
  database: 'school',
});

function getAll (callback) {
  const sql = 'SELECT * FROM users'
  conn.query(sql,  (err, results) =>{
    callback(err, results)
  });
}

function findByEmail(email, callback) {
  const query = 'SELECT * FROM users WHERE email = ?'
  conn.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error retrieving user from database: ' + err)
      callback(err)
      return;
    }
    callback(null, results)
  })
}
function createUser(username, password, email, Birthday, Number, callback) {
  // Check if Birthday is a string in MM/DD/YYYY format
  if (typeof Birthday !== 'string' || !/^\d{2}\/\d{2}\/\d{4}$/.test(Birthday)) {
    const error = new Error('Invalid Birthday format. It should be in the format MM/DD/YYYY.')
    console.error(error)
    callback(error, null)
    return
  }

  const [month, day, year] = Birthday.split('/')
  const birthdayDate = new Date(`${year}-${month}-${day}`)

  // Check if birthdayDate is a valid date
  if (isNaN(birthdayDate.getTime())) {
    const error = new Error('Invalid date.')
    console.error(error)
    callback(error, null)
    return
  }

  const formattedBirthday = birthdayDate.toISOString().slice(0, 10)

  const query = 'INSERT INTO users (username, password, email, Birthday, Number) VALUES (?, ?, ?, ?, ?)'

  conn.query(query, [username, password, email, formattedBirthday, Number], (err, result) => {
    if (err) {
      console.error('Error creating user: ' + err)
      callback(err, null)
    } else {
      callback(null, result)
    }
  })
}







function updateNewProfile(username, email, password, idusers, callback) {
  const query = "UPDATE users SET username = ?, email = ?, password = ? WHERE idusers = ?";
  conn.query(query, [username, email, password, idusers], (err, results) => {
    if (err) {
      console.error("Error updating user profile: " + err);
      callback(err);
    } else {
      callback(null, results);
    }
  });
}

function deleteUser(idusers, callback) {
  const query = "DELETE FROM users WHERE idusers = ?";
  conn.query(query, [idusers], (err, results) => {
    if (err) {
      console.error("Error deleting user: " + err);
      callback(err);
    } else {
      callback(null, results);
    }
  });
}
function getUserById(idusers, callback) {
  const query = "SELECT * FROM users WHERE idusers = ?";
  conn.query(query, [idusers], (err, results) => {
    if (err) {
      console.error("Error retrieving user by ID: " + err);
      callback(err, null);
    } else if (results.length === 0) {
      callback("User not found", null);
    } else {
      callback(null, results[0]);
    }
  });
}


const updateUserPassword = (idusers, newPassword , callback) => {
  const saltRounds = 10;

  bcrypt.hash(newPassword , (err, hash) => {
    if (err) {
      console.error('Error hashing new password: ' + err.message);
      callback(err);
    } else {
      const updateSql = 'UPDATE users SET password = ? WHERE idusers = ?';
      conn.query(updateSql, [hash, idusers], (err, result) => {
        if (err) {
          console.error('Error updating password: ' + err.message);
          callback(err);
        } else {
          console.log('Password updated successfully.');
          callback(null);
        }
      });
    }
  });
};
function getUserIdByUsername(username, callback) {
  const query = "SELECT idusers FROM users WHERE username = ?";
  conn.query(query, [username], (err, results) => {
    if (err) {
      console.error("Error retrieving user ID by username: " + err);
      callback(err, null);
    } else if (results.length === 0) {
      callback("User not found", null);
    } else {
      callback(null, results[0].idusers);
    }
  });
}


function getUserIdByEmail(email, callback) {
  const query = "SELECT idusers FROM users WHERE email = ?";
  conn.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error retrieving user ID by email: " + err);
      callback(err, null);
    } else if (results.length === 0) {
      callback("email not found", null);
    } else {
      callback(null, results[0].idusers);
    }
  });
}


const getOneUser = (idUsers, callback) => {
  const sql = `SELECT * FROM users WHERE idUsers = ?`;
  conn.query(sql, [idUsers], function (error, results) {
    callback(error, results);
  });
};


  
  
module.exports = { 
  findByEmail,
  createUser,
  getAll,
  updateNewProfile,
  deleteUser,
  getUserById,
  getUserIdByUsername,
  getUserIdByEmail,
  findByEmail,
    createUser,
    updateNewProfile,
    getAll,
    updateUserPassword   ,getOneUser 
};