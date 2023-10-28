const express = require('express')
const router = express.Router()

const { createNote,deleteNote, getAllNotes, getNotesBySubject ,updateNote,getNotesByStudentId} = require('../database/model/Notes');

router.get('/getAll', getAllNotes);
router.get('/getBySubject/:id',getNotesBySubject)
router.post('/Add',createNote)
router.put("/updateNote/:id", updateNote)
router.delete("/DeleteNote/:id",deleteNote)
router.get("/getByID/:student_idStudent",getNotesByStudentId)
module.exports = router