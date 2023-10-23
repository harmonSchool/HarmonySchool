const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../database/model/users");
const secretKey = "mysecretkey";
const conn = require("../database/index");

const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "harmony",
});

function get(req,res){
  User.getAll((err,result)=>{
    if(err){
      res.status(404).send(err)
    }else if(result){
      res.status(200).send(result)
    }
  })
}


function login(req, res) {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err) {
      console.error("Error retrieving user from database: " + err);
      return res.sendStatus(500);
    }
    if (results.length === 0) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error("Error comparing passwords: " + err);
        return res.sendStatus(500);
      }

      if (!isMatch) {
        return res.status(401).send({ message: "Invalid email or password" });
      }

      const token = jwt.sign({ userId: user.User_Id }, secretKey, {
        expiresIn: "1h",
      });
      res.send({ token, id: user.idusers });
    });
  });
}
function register(req, res) {
  const { username, password, email, Birthday, Number } = req.body;

  User.findByEmail(email, (err, rows) => {
    if (err) {
      return res
        .status(500)
        .send("Error retrieving user from database: " + err);
    }
    if (rows.length > 0) {
      return res.status(400).send("Email address already in use");
    }
    if (!password) {
      return res.status(400).send("Password is required");
    }

    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return res.status(500).send("Error generating salt: " + err);
      }

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          return res.status(500).send("Error hashing password: " + err);
        }

        // Pass the callback function to createUser
        User.createUser(
          username,
          hash,
          email,
          Birthday,
          Number,
          (err, result) => {
            if (err) {
              return res.status(500).send("Error creating user: " + err);
            }
            return res.sendStatus(200);
          }
        );
      });
    });
  });
}

function getAll(callback) {
  const sql = "SELECT * FROM users";
  conn.query(sql, (err, results) => {
    callback(err, results);
  });
}

const sendEmail = (req, res) => {
  const { email } = req.body;

  // Use the connection pool to execute queries
  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.status(500).json("An error occurred");
      return;
    }

    // Query to find a user by email
    const findUserQuery = "SELECT * FROM users WHERE email = ?";

    connection.query(findUserQuery, [email], (queryErr, results) => {
      connection.release(); // Release the connection back to the pool

      if (queryErr) {
        console.error(queryErr);
        res.status(500).json("An error occurred");
      } else if (results.length === 0) {
        res.status(404).json("Email not found");
      } else {
        sendEmailFunction(email, (emailErr) => {
          if (emailErr) {
            console.error(emailErr);
            res.status(500).json("Error sending email");
          } else {
            res.json("Email sent");
          }
        });
      }
    });
  });
};



async function update(req, res) {
  const { username, password, email } = req.body; 
  const { idusers } = req.params;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.updateNewProfile(username, email, hashedPassword, idusers);

    res.status(200).send({ message: 'Update successful' });
  } catch (err) {
    console.error('Error updating user profile: ' + err);
    res.sendStatus(500);
  }
}


//contact us 





module.exports = { login , 
  register,
  getAll,sendEmail,update

 };
