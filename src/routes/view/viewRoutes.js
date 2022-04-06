const { Router } = require("express");
const { renderHomePage, renderNotesPage } = require("../../controller/view");

const router = Router();

router.get("/", renderHomePage);
router.get("/notes", renderNotesPage);

module.exports = router;