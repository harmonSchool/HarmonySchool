const { add,remove,getAll,put } = require("../database/model/subject")

const addSubject = (req, res) => {
  const SubjectData = req.body; 
  console.log(SubjectData);
  
  add(SubjectData, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json(error); 
    } else {
      res.status(201).json(results); 
    }
  });
};

const RemoveSubject = (req, res) => {
    const id = req.params.id;
  
    remove(id, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  };

  const getSubject = (req, res) => {
    getAll((error, Subject) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(Subject);
      }
    });
  }

  const getOneSubject = (req, res) => {
    const id = req.params.id;
  
    getOne(id, function (err, result) {
      if (err) res.status(500).send(err);
      else if (!result) res.status(404).json({ error: "Subject not found" });
      else res.json(result);
    });
  };

  
const UpdateSubject = (req, res) => {
  const {id}=req.params
  const updatedData = req.body;
  put(id, updatedData, function (err, results) {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};


  

  


  

  module.exports ={
    getOneSubject,
    getSubject,
    RemoveSubject,
    addSubject,
    UpdateSubject
  }


