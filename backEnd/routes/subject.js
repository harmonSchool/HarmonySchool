const express = require('express');
const router = express.Router();
const  { getOneSubject, getSubject, RemoveSubject, addSubject, UpdateSubject} = require ("../controllers/subject")


router.post('/add',addSubject);
router.get('/get',getSubject)
router.delete('/:id',RemoveSubject)
router.get('/getOne/:id',getOneSubject)
router.put('/:id',UpdateSubject)


module.exports = router;