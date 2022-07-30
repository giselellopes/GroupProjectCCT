const { verify } = require("jsonwebtoken");

const LocalStorage = require('node-localstorage').LocalStorage;

module.exports = async function ensureAuthenticated(req, res, next) {
    const localStorage = new LocalStorage('./scratch');
    const token = localStorage.getItem('token');

    console.log(token)

    if (!token) {
        console.log('Token is missing.');
        res.redirect('login');
    }

    try {
        verify(token, process.env.TOKEN_KEY);

        return next();
    } catch (err) {
        res.redirect('login');
    }
}