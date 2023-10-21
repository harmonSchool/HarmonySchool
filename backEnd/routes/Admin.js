const express = require('express')
const { CreateAdmin, LoginAdmin, UpdateAdmin ,GetAllAdmins} = require('../controllers/Admin')
const router = express.Router()
router.post('/addAdmin',CreateAdmin)
router.post('/loginAdmin',LoginAdmin)
router.put('/update/:id',UpdateAdmin)
router.get('/getAllAdmin',GetAllAdmins)
module.exports = router