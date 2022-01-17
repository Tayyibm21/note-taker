const path = require("path");
const { v4: uuidv4 } = require("uuid");

const { readFromFile, writeToFile } = require("../../util");

const getNotes = (req, res) => {
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
      res.send(`deletenote`);
  };

  module.exports = {
      getNote,
      createNotes,
      deleteNotes,
  };