const express = require('express')
const router = express.Router()

const { login, register, getUsers, sendEmail ,update } = require('../controllers/users');
router.post('/login', login);
router.post('/register',register)
router.put('/changePassword',sendEmail)
router.put('/edit/:idusers', update); 
router.get("/getAll",getUsers)







module.exports = router