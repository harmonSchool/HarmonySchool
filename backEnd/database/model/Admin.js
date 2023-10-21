const connection = require('../index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const addAdmin = (adminData, callback) => {
    if (!adminData || !adminData.password) {
        callback('Invalid admin data', null);
        return;
    }

    bcrypt.hash(adminData.password, saltRounds, (err, hash) => {
        if (err) {
            callback(err, null);
        } else {
            const sql = 'INSERT INTO admin (admin, password, image) VALUES (?,?,"https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg");';
            const values = [adminData.admin, hash, adminData.image];
            connection.query(sql, values, function (error, result) {
                if (error) {
                    callback(error, null);
                } else {
                    callback(null, result);
                }
            });
        }
    });
};
const login = (adminData, callback) => {
    const { admin, password } = adminData
    const sql = 'SELECT * FROM admin WHERE admin = ?'
    connection.query(sql, [admin], (error, results) => {
        if (error) {
            callback(error, null)
        } else {
            if (results.length === 0) {
                callback('Admin not found', null)
            } else {
                const hashedPassword = results[0].password
                bcrypt.compare(password, hashedPassword, (err, res) => {
                    if (res) {
                        callback(null, { message: 'Login successful' });
                    } else {
                        callback('Invalid password', null);
                    }
                });
            }
        }
    });
};
const updateAdmin = (adminData, callback) => {
    const { id, newName, newImage, newPassword } = adminData;
    const updatePromises = [];

    if (newName) {
        const namePromise = new Promise((resolve, reject) => {
            const sql = 'UPDATE admin SET admin = ? WHERE idadmin = ?';
            connection.query(sql, [newName, id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
        updatePromises.push(namePromise);
    }

    if (newImage) {
        const imagePromise = new Promise((resolve, reject) => {
            const sql = 'UPDATE admin SET image = ? WHERE idadmin = ?';
            connection.query(sql, [newImage, id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
        updatePromises.push(imagePromise);
    }

    if (newPassword) {
        const passwordPromise = new Promise((resolve, reject) => {
            bcrypt.hash(newPassword, saltRounds, (err, hash) => {
                if (err) {
                    reject(err);
                } else {
                    const sql = 'UPDATE admin SET password = ? WHERE idadmin = ?';
                    connection.query(sql, [hash, id], (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    });
                }
            });
        });
        updatePromises.push(passwordPromise);
    }

    Promise.all(updatePromises)
        .then((results) => {
            callback(null, results);
        })
        .catch((error) => {
            callback(error, null);
        });
};
const getAllAdmins = (callback) => {
    const sql = 'SELECT * FROM admin';
    connection.query(sql, (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};


module.exports = {
    addAdmin,
    login,
    updateAdmin,
    getAllAdmins
};