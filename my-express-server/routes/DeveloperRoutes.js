const ensureAuthenticated = require('../public/utils/EnsureAuthenticated');

const { Router } = require('express');
const router = Router();
const {
    createDeveloper,
    getAllDevelopers,
    getDeveloper,
    updateDeveloper,
    deleteDeveloper
} = require('../public/controllers/developer-controller')

router.post("/devs", createDeveloper);
router.get("/devs", ensureAuthenticated, getAllDevelopers);
router.get("/devs:id", getDeveloper);
router.put("/devs:id", updateDeveloper);
router.delete("/devs:id", deleteDeveloper)

module.exports = router