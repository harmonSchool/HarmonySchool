const conn = require("../index");

function updateNewProfile(username, password, email, idusers, callback) {
  const query = "UPDATE users SET username = ?, email = ?, password = ? WHERE idusers = ?";
  conn.query(query, [username, email, password, idusers], (err, results) => {
    if (err) {
      console.error("Error updating user profile: " + err);
      callback(err);
      return;
    }
    callback(null, results);
  });
}

module.exports = {
  updateNewProfile
};