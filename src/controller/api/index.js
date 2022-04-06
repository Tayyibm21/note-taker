const {
  getNotesList,
  validKeys,
  writeNotesToFile,
  identifyNoteId,
} = require("../../utility/util");
const { v4: uuidv4 } = require("uuid");

const getNotes = (req, res) => {
  // get notes data fom the db file by reading, then parse the string and then res.json

  const notesList = getNotesList();

  res.json(notesList);
};

const addNewNote = (req, res) => {
  const payLoad = req.body;

  const isValid = validKeys.every((each) => {
    return Object.keys(payLoad).includes(each);
  });

  if (isValid) {
    // create the notes database body object
    const newNote = { id: uuidv4(), ...payLoad };

    //get notes list
    const notesList = getNotesList();

    //check if that note exists in the database
    const doesNotExist = notesList.every((each) => {
      return each.title != newNote.title;
    });

    if (doesNotExist) {
      // push the new notes body object to the notes db
      notesList.push(newNote);

      writeNotesToFile(notesList);

      return res.send(newNote);
    }
  } else
    return res.send({
      message: `This note (${newNote.id}) already excits`,
    });
};

const deleteNote = (req, res) => {
  const { id } = req.params;

  console.log(id);

  const noteList = getNotesList();

  const getNoteById = noteList.find((each) => {
    return each.id == id;
  });

  if (!getNoteById)
    return res
      .status(404)
      .json({ message: `No book with an id of ${id} exists` });

  const newNotesList = noteList.filter((each) => {
    return each.id !== id;
  });

  writeNotesToFile(newNotesList);

  res.send(newNotesList);
};

module.exports = { addNewNote, getNotes, deleteNote };