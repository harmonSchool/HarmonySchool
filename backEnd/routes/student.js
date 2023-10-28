const express = require('express');
const router = express.Router();
const  {addStudent,getStudentsInClassController,getAllStudent,RemoveStudent,UpdateStudent,getStudentsByUserController, getStudentsByClassController,getOnStudent,getStudentsByClassController2, getStudentsByClassController3,
    getStudentsByClassController4,
    getStudentsByClassController5,
    getStudentsByClassController6,getStudentnames} = require ("../controllers/student")


router.post('/add',addStudent);
router.get('/get',getAllStudent)
router.delete('/:id',RemoveStudent)
router.put('/:id',UpdateStudent)
router.get('/getByClass/:idclasses', getStudentsInClassController);
router.get("/getOneStudent/:idStudent",getOnStudent)
router.get('/getStudentsByClass/:className', getStudentsByClassController);
router.get('/getStudentsByClass2/:className', getStudentsByClassController2);
router.get('/getStudentsByClass3/:className', getStudentsByClassController3);
router.get('/getStudentsByClass4/:className', getStudentsByClassController4);
router.get('/getStudentsByClass5/:className', getStudentsByClassController5);
router.get('/getStudentsByClass6/:className', getStudentsByClassController6);

router.get('/getStudent/:First_name', getStudentnames);


router.get('/getByUser/:users_idusers', getStudentsByUserController);



module.exports = router;