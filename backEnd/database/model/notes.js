const conn = require("../index");

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
    const { note1, note2, note3, subject_idsubject, teachers_idteacher, noteName, student_idStudent } = req.body;
    const query = `INSERT INTO notes (note1, note2, note3, subject_idsubject, teachers_idteacher, noteName, student_idStudent) VALUES (${note1}, ${note2}, ${note3}, ${subject_idsubject}, ${teachers_idteacher}, '${noteName}', ${student_idStudent})`;

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
    const query = `SELECT * FROM notes WHERE subject_idsubject = ${subject_idsubject}`;

    conn.query(query, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
}

function updateNote(req, res) {
    const { idnote, note1, note2, note3, subject_idsubject, teachers_idteacher, noteName, student_idStudent } = req.body;
    const query = `UPDATE notes SET note1 = ${note1}, note2 = ${note2}, note3 = ${note3}, subject_idsubject = ${subject_idsubject}, teachers_idteacher = ${teachers_idteacher}, noteName = '${noteName}', student_idStudent = ${student_idStudent} WHERE idnote = ${idnote}`;

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

function getNotesByStudentId(req, res) {
  const { student_idStudent } = req.params;
  const query = `SELECT * FROM notes WHERE student_idStudent = ${student_idStudent}`;

  conn.query(query, (err, result) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.status(200).send(result);
      }
  });
}

module.exports = {
  deleteNote,
  updateNote,
  createNote,
  getAllNotes,
  getNotesBySubject,
  getNotesByStudentId, // Add this line to export the new function
};
