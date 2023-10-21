const { add,remove,getAll,getOne } = require("../database/model/classe")

const addClasse = (req, res) => {
  const ClassData = req.body; 
  console.log(ClassData);
  
  add(ClassData, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json(error); 
    } else {
      res.status(201).json(results); 
    }
  });
};

const RemoveClass = (req, res) => {
    const id = req.params.id;
  
    remove(id, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  };

  const getClasses = (req, res) => {
    getAll((error, Classes) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(Classes);
      }
    });
  }

  const getOneClass = (req, res) => {
    const id = req.params.id;
  
    getOne(id, function (err, result) {
      if (err) res.status(500).send(err);
      else if (!result) res.status(404).json({ error: "Class not found" });
      else res.json(result);
    });
  };



  

  


  

  module.exports ={
    getClasses,
    RemoveClass,
    addClasse,
    getOneClass
  }


