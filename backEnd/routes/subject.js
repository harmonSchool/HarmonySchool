const express = require('express');
const router = express.Router();
const  { getOneSubject, getSubjectList, RemoveSubject, addSubject, UpdateSubject} = require ("../controllers/subject")


router.post('/add',addSubject);
router.get('/get',getSubjectList)
router.delete('/:id',RemoveSubject)
router.get('/getOne/:id',getOneSubject)
router.put('/put/:id',UpdateSubject)


module.exports = router;