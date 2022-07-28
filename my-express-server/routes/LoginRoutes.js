const { Router } = require('express');
const router = Router();
const { logon } = require('../public/controllers/login-controller')

router.post("/login", logon);

module.exports = router