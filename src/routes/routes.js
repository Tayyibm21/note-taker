const { Router } = require("express");

const {
  getNotes,
  createNotes,
  deleteNotes,
} = require("../controllers/controllers");

const router = Router();

router.get("../controllers", getNotes);
router.post("../controllers", createNotes);
router.delete("../controllers", deleteNotes);

module.exports = router;