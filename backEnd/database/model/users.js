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


  module.exports = { findByEmail,
    createUser,
    updateNewProfile
 };
  