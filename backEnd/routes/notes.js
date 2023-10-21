const express = require('express')
const router = express.Router()

const { createNote,deleteNote, getAllNotes, getNotesBySubject ,updateNote} = require('../database/model/notes');

router.get('/getAll', getAllNotes);
router.get('/getBySubject/:id',getNotesBySubject)
router.post('/Add',createNote)
router.put("/updateNote/:id", updateNote)
router.delete("/DeleteNote/:id",deleteNote)

module.exports = router