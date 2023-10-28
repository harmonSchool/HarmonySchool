const { add, remove, getAll, put, getSubject } = require("../database/model/subject");

const addSubject = (req, res) => {
  const SubjectData = req.body; // Assuming SubjectData is coming from the request body

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

  remove(id, (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};

const getSubjectList = (req, res) => {
  getAll((error, Subjects) => {
    if (error) {
      console.log(error);
      res.status(500).json(error);
    } else {
      res.status(200).json(Subjects);
    }
  });
}

const getOneSubject = (req, res) => {
  const id = req.params.id;

  getSubject(id, (err, result) => {
    if (err) res.status(500).send(err);
    else if (!result || result.length === 0) {
      res.status(404).json({ error: "Subject not found" });
    } else {
      res.json(result[0]);
    }
  });
};

const UpdateSubject = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  put(id, updatedData, (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};

module.exports = {
  getOneSubject,
  getSubjectList,
  RemoveSubject,
  addSubject,
  UpdateSubject
};
