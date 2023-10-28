const Admin = require('../database/model/Admin');

const CreateAdmin = (req, res) => {
    const { admin, password, image, userType } = req.body
    const adminData = { admin, password, image, userType }

    Admin.addAdmin(adminData, (error, result) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).json(result)
        }
    });
};
const LoginAdmin = (req, res) => {
    const { admin, password } = req.body
    const adminData = { admin, password }

    Admin.login(adminData, (error, result) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).json(result)
        }
    });
};
const UpdateAdmin = (req, res) => {
    const { id, newName, newImage, newPassword } = req.body;
    const adminData = { id, newName, newImage, newPassword };

    Admin.updateAdmin(adminData, (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).json(result);
        }
    });
};
const GetAllAdmins = (req, res) => {
    Admin.getAllAdmins((error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).json(results);
        }
    });
};



module.exports = {
    CreateAdmin,
    LoginAdmin,
    UpdateAdmin,
    GetAllAdmins,
};