const express = require('express');
const router = express.Router();
const  {addStudent,getStudentsInClassController,getAllStudent,RemoveStudent,UpdateStudent,getStudentsByUserController, getOnStudent, getByname} = require ("../controllers/student")


router.post('/add',addStudent);
router.get('/get',getAllStudent)
router.delete('/:id',RemoveStudent)
router.put('/:id',UpdateStudent)
router.get('/getByClass/:idclasses', getStudentsInClassController);
router.get("/getOneStudent/:idStudent",getOnStudent)
router.post("/getID",getByname)
router.get('/getByUser/:users_idusers', getStudentsByUserController);



module.exports = router;