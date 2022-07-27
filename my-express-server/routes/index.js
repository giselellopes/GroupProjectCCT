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

router.get("/about", function (req, res) {
    res.render('about');
});
router.get("/contact", function (req, res) {
    res.render('contact');
});
router.get("/successful", function (req, res) {
    res.render('successful');
});
router.get("/project", function (req, res) {
    res.render('project');
});
router.get("/project2", function (req, res) {
    res.render('project2');
});
router.get("/project3", function (req, res) {
    res.render('project3');
});
router.get("/project3", function (req, res) {
    res.render('project3');
});
router.get("/findDeveloper", function (req, res) {
    res.render('findDeveloper');
});
router.get("/iamDeveloper", function (req, res) {
    res.render('iamDeveloper');
});

module.exports = router