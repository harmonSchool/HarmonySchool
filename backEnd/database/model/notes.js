const conn = require("../index")

function getAllNotes(req, res) {
    const query = 'SELECT * FROM notes';
  
   conn.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }

  function createNote(req, res) {
    const { note1, note2 ,note3,subject_idsubject ,teachers_idteacher } = req.body;
    const query = `INSERT INTO notes (subject_idsubject, note1,note2,note3,teachers_idteacher) VALUES ('${subject_idsubject}', '${note1}','${note2}','${note3}','${teachers_idteacher}')`;
  
   conn.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send('Note created successfully');
      }
    });
  }
  function getNotesBySubject(req, res) {
    const { subject_idsubject } = req.params;
    const query = `SELECT * FROM notes WHERE subject = '${subject_idsubject}'`;
  
    connection.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
  


  function updateNote(req, res) {
    const { idnote, note  } = req.body;
    const query = `UPDATE notes SET note = '${note}' WHERE idnote = ${idnote}`;
  
   conn.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send('Note updated successfully');
      }
    });
  }
  function deleteNote(req, res) {
    const { idnote } = req.params; 
    const query = `DELETE FROM notes WHERE idnote = ${idnote}`;
  
   conn.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send('Note deleted successfully');
      }
    });
  }
  
  module.exports={
    deleteNote,
    updateNote,
    createNote,
    getAllNotes,
getNotesBySubject
  }
  
  
  

  
