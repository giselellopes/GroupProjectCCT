const { Router } = require('express');
const router = Router();
const { createDeveloper, getDeveloper } = require('../public/controllers/developer-controller')

//routes for login
router.get("/", function (req, res) {
    res.render('index');
});

router.get("/login", function (req, res) {
    res.render('login');
});

router.get("/register", function (req, res) {
    res.render('register');
});

router.post("/register", createDeveloper);
router.get("/devs", getDeveloper);


router.get("/create-project", function (req, res) {
    res.render('create-project');
});

router.get("/proposal", function (req, res) {
    res.render('proposal');
});

module.exports = router