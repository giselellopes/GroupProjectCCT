const verify = require("jsonwebtoken");

const LocalStorage = require('node-localstorage').LocalStorage;

module.exports = function ensureAuthenticated(req, res, next) {
    const localStorage = new LocalStorage('./scratch');
    const token = localStorage.getItem('token');

    if (!token) {
        console.log('Token is missing.');
        res.redirect('login');
    }

    try {
        verify(token, process.env.TOKEN_KEY);

        return next();
    } catch (err) {
        console.log(token)
        console.log(process.env.TOKEN_KEY);
        console.log('Invalid token!');
        res.redirect('login');
    }
}