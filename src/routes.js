const {router} = require(`express`)
const apiroutes = require(`./api`)

const router= router();

router.use(`/api, apiRoutes`);

module.exports = router;