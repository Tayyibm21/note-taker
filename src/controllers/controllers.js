const path = require("path");
const { v4: uuidv4 } = require("uuid");

const { readFromFile, writeToFile } = require("../../util");

const getAppNotes = (req, res) => {
  const filePath = path.join(__dirname, "../../../db/db.json");
  const notes = readFromFile(filePath);
  res.json(notes);
};

 const createNotes = (req, res) => {
     res.send(`createNotes`);
 };

  const deleteNotes = (req, res) => {
      res.send(`deletenote`);
  };

  module.exports = {
      getNote,
      createNotes,
      deleteNotes,
  };