const { Router } = require("express");
const finalPath = require("./final-path");

const router = Router();

router.use("/notes", finalPath);

module.exports = router;