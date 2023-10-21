const express = require('express')
const router = express.Router()

const { login, register, getAll, sendEmail ,update } = require('../controllers/users');
router.post('/login', login);
router.post('/register',register)
router.put('/changePassword',sendEmail)
router.patch('/edit/:idusers', update); 
router.get("/getAll",getAll)

module.exports = router