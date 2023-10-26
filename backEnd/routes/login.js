const express = require('express');
const router = express.Router();
const { insertUserLoginCon, insertTeacherLoginCo } = require("../controllers/login"); 
router.post('/insertUserLogin', insertUserLoginCon);


router.post('/insertTeacherLogin', insertTeacherLoginCo);

module.exports = router;
