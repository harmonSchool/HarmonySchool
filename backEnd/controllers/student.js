const { add,put,remove,getAll,getStudentsInClass,getOneStudent,
  getStudentsByUser,getStudentsByClass,getStudentsByClass2, getStudentsByClass3,
  getStudentsByClass4 ,
  getStudentsByClass5 ,
  getStudentsByClass6  } = require("../database/model/student")


  const addStudent = (req, res) => {
    const { First_name, LastName, Birthday, Class , image, users_idusers, classes_idclasses, type } = req.body;
    const StudentData = { First_name, LastName, Birthday, Class , image, users_idusers, classes_idclasses, type };
  
    add(StudentData, (dbError, dbResults) => {
      if (dbError) {
        console.log(dbError);
        res.status(500).json(dbError);
      } else {
        res.status(201).json(dbResults);
      }
    });
  };
  


const getByname=(req,res)=>{
const {First_name}=req.body
getStudentIdByUsername(First_name,(err,result)=>{
  if(err){
    console.error("Error is "+err);
  }
  else{
    res.status(200).json(result)
  }
})
}


const UpdateStudent = (req, res) => {
    const {id}=req.params
    const updatedData = req.body;
    put(id, updatedData, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  };


  const RemoveStudent = (req, res) => {
    const id = req.params.id;
  
    remove(id, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  };

 
  const getAllStudent = (req, res) => {
    getAll((error, students) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(students);
      }
    });
  }




  const getStudentsInClassController = (req, res) => {
    const idclasses = req.params.idclasses;
  
    getStudentsInClass(idclasses, (error, students) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(students);
      }
    });
  };


  const getOnStudent = (req, res) => {
    const id = req.params.idStudent;
  
    getOneStudent(id, function (err, result) {
      if (err) res.status(500).send(err);
      else if (!result) res.status(404).json({ error: "student not found" });
      else res.json(result);
    });
  };

  const getStudentsByUserController = (req, res) => {
    const idStudent = req.params.users_idusers;
  
    getStudentsByUser(idStudent, (error, students) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(students);
      }
    });
  };
  const getStudentsByClassController = (req, res) => {
    const className = "First class"; 
  
    getStudentsByClass(className, (error, students) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(students);
      }
    });
  };
  
  const getStudentsByClassController2 = (req, res) => {
    const className = "Second class"; 
  
    getStudentsByClass2(className, (error, students) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(students);
      }
    });
  };

  const getStudentsByClassController3 = (req, res) => {
    const className = "Third class"; 
  
    getStudentsByClass3(className, (error, students) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(students);
      }
    });
  };

  const getStudentsByClassController4 = (req, res) => {
    const className = "Fourt class"; 
  
    getStudentsByClass4(className, (error, students) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(students);
      }
    });
  };

  const getStudentsByClassController5 = (req, res) => {
    const className = "Fifth class"; 
  
    getStudentsByClass5(className, (error, students) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(students);
      }
    });
  };

  const getStudentsByClassController6 = (req, res) => {
    const className = "Sixth class"; 
  
    getStudentsByClass6(className, (error, students) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(students);
      }
    });
  };



  

  module.exports ={
    addStudent,
    getStudentsInClassController,
    getStudentsByUserController,
    getAllStudent,
    RemoveStudent,
    UpdateStudent,
    getOnStudent,
    getStudentsByClassController2,
    getStudentsByClassController3,
    getStudentsByClassController4,
    getStudentsByClassController5,
    getStudentsByClassController6,
    
    getStudentsByClassController

  }


