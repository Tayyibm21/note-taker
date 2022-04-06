const { Router } = require("express");
const viewRoutes = require("./view/viewRoutes");
const apiRoutes = require("./api/apiRoutes");

const router = Router();

router.use("/", viewRoutes);
router.use("/api", apiRoutes);

module.exports = router;