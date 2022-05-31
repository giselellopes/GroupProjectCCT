const { Router } = require('express');
const router = Router();

const developer = require('../public/developer-controller')

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

router.get("/create-project", function (req, res) {
    res.render('create-project');
});

router.get("/proposal", function (req, res) {
    res.render('proposal');
});

router.post("/newDeveloper", developer.createDeveloper);
router.get("/getDevelopers", developer.getDevelopers);

module.exports = router