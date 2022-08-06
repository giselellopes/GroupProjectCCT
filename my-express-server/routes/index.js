const { Router } = require('express');
const router = Router();

const LocalStorage = require('node-localstorage').LocalStorage;

const ensureAuthenticated = require('../public/utils/EnsureAuthenticated');

//routes for login
router.get("/", function (req, res) {
    const localStorage = new LocalStorage('./scratch');
    localStorage._deleteLocation();

    res.render('index');
});

router.get("/login", function (req, res) {
    const localStorage = new LocalStorage('./scratch');
    localStorage._deleteLocation();

    res.render('login');
});

router.get("/register", function (req, res) {
    res.render('register');
});

router.get("/create-project", function (req, res) {
    res.render('create-project');
});

router.get("/proposal", ensureAuthenticated, function (req, res) {
    res.render('proposal')
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
router.get("/findDeveloper", ensureAuthenticated, function (req, res) {
    res.render('findDeveloper');
});
router.get("/iamDeveloper", function (req, res) {
    res.render('iamDeveloper');
});

module.exports = router