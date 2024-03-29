const express = require('express')
const router = express.Router()

const { login, register, getUsers, sendEmail ,updatePassword , update,getUserById ,deleted, getUserByID,getByUserName, getBymail } = require('../controllers/users');
router.post('/login', login);
router.post('/register',register)
router.put('/changePassword',sendEmail)
router.put('/edit/:idusers', update); 
router.get("/getAll",getUsers)
router.put("/updatePassword/:idusers",updatePassword)
router.get("/oneUser/:idUsers",getUserById)
router.get("/getById/:idusers",getUserByID)
router.delete("/delete/:idusers",deleted)
router.post("/getByuser",getByUserName)
router.post("/getUserByemail",getBymail)
module.exports = router