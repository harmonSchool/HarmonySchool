const express = require('express');
const router = express.Router();
const  {getClasses,RemoveClass,addClasse,getSixClass,getFiveClass,getFourClass,getThreeClass,getTwoClass,getOneClass,} = require ("../controllers/classe")


router.post('/add',addClasse);
router.get('/get',getClasses)
router.delete('/:id',RemoveClass)
router.get('/getOne/:id',getOneClass)
router.get('getByclass/:iduser')


module.exports = router;