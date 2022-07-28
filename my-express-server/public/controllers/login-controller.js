const Developer = require("../models/Developer");
const verify = require('../utils/HashPassword');
const generateToken = require('../utils/GenerateToken');

const LocalStorage = require('node-localstorage').LocalStorage;

exports.logon = function (req, res) {
    Developer.findOne({ username: req.body.email }, async function (err, developer) {
        if (err) {
            return res.status(400).json(err);
        }
        if (developer == null) {
            return res.status(400).json({ Mensage: 'Username or password incorrect!' })
        }
        const passwordMatch = await verify(req.body.password, developer.password);

        if (!passwordMatch) {
            return res.status(400).json({ Mensage: 'Username or password incorrect!' })
        }

        token = generateToken(developer.id, developer.email);

        console.log(token)
        console.log(process.env.TOKEN_KEY);
        console.log('------------------');

        const localStorage = new LocalStorage('./scratch');
        localStorage.setItem('token', token)

        res.redirect('proposal');
    });
}
