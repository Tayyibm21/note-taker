const path = require("path");
const { v4: uuidv4 } = require("uuid");

const { readFromFile, writeToFile } = require("../../util");

const getNote = (req, res) => {
  const filePath = path.join(__dirname, "../../../db/db.json");
  const notes = readFromFile(filePath);
  res.json(notes);
};
const createNotes = (req, res) => {
    try {
      const { title, text } = req.body;
      const id = uuidv4();
      const newNote = { title, text, id };
      const filePath = path.join(__dirname, "../../../db/db.json");
      const notes = readFromFile(filePath);
      writeToFile(filePath, JSON.stringify([newNote, ...notes]));
      res.json(newNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Error!:postAppNotes" });
    }
  };

  const deleteNotes = (req, res) => {
    try {
      const { id } = req.params;
      const filePath = path.join(__dirname, "../../../db/db.json");
      const filteredNotes = readFromFile(filePath).filter(
        (note) => note.id !== id
      );
      writeToFile(filePath, JSON.stringify(filteredNotes));
      res.status(200).json({ message: "your note has been delete" });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Error!:deleteAppNotes" });
    }
  };

  module.exports = {
      getNote,
      createNotes,
      deleteNotes,
  };