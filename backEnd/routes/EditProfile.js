const express = require('express')
const router = express.Router()

const { update , getAll} = require('../controllers/EditProfile');
router.patch('/edit', update);

module.exports = router