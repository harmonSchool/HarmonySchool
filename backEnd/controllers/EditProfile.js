const EditProfile = require("../database/model/EditProfile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const conn = require("../database/index");

const JWT_SECRET_KEY = "hash40541@posl";

function update(req, res) {
  const { username, password, email, idusers } = req.body;

  EditProfile.updateNewProfile(username, password, email, idusers, async (err, results) => {
    if (err) {
      console.error('Error updating user profile: ' + err);
      return res.sendStatus(500);
    }

    res.status(200).send({ message: 'Update successful' });
  });
}

async function getAll(req, res) {
  try {
    const sql = 'SELECT * FROM users';
    const results = await conn.query(sql);

    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching users: ' + error);
    res.sendStatus(500);
  }
}

function createToken(user) {
  const payload = {
    user_id: user.id, 
  };

  return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1h' }); 
}

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

module.exports = {
  update,
  getAll,
  createToken,
  hashPassword,
};
