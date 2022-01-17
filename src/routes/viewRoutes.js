const { Router } = require("express");

const { renderHomepage, renderNotes } = require("../controllers/view");

const router = Router();

router.get("/notes", renderNotes);
router.get("*", renderHomepage);

module.exports = router;