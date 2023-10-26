const express = require('express');
const router = express.Router();
const { loginController,createAuthController} = require('../controllers/Auth');


router.post('/auth',loginController);
router.post('/create/user',createAuthController);

module.exports = router;
