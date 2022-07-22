const { Router } = require('express');
const router = Router();

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

module.exports = router