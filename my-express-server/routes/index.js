const { Router } = require('express');
const router = Router();

const LocalStorage = require('node-localstorage').LocalStorage;

const ensureAuthenticated = require('../public/utils/EnsureAuthenticated');

//routes for login
router.get("/", function (req, res) {
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
    es.render('proposal')
});

module.exports = router