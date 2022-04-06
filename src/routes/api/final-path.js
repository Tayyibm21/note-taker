const { Router } = require("express");
const { addNewNote, getNotes, deleteNote } = require("../../controller/api");
const { renderHomePage, renderNotesPage } = require("../../controller/view");

const router = Router();

router.post("/", addNewNote);

router.get("/", getNotes);

router.delete("/:id", deleteNote);

module.exports = router;