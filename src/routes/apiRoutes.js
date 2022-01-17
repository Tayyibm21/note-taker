const { Router } = require("express");

const {
  getNotes,
  createNotes,
  deleteNotes,
} = require("../controllers/api/notes");

const router = Router();

router.get("/notes", getNotes);
router.post("/notes", createNotes);
router.delete("/notes/:id", deleteNotes);

module.exports = router;