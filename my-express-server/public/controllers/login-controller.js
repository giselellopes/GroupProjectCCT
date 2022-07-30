const Developer = require("../models/Developer");
const Customer = require("../models/Customer");
const { verify } = require('../utils/HashPassword');

const generateToken = require('../utils/GenerateToken');

const LocalStorage = require('node-localstorage').LocalStorage;

exports.logon = async function (req, res) {
    let user = await Developer.findOne({ "email": req.body.email });
    let redirect = 'proposal';

    if (!user) {
        user = await Customer.findOne({ "email": req.body.email });
        redirect = 'findDeveloper';
    }

    if (!user) {
        return res.status(400).json({ Mensage: 'Email or password incorrect!' })
    }

    const passwordMatch = await verify(req.body.password, user.password);

    if (!passwordMatch) {
        return res.status(400).json({ Mensage: 'Email or password incorrect!' })
    }

    console.log(user)
    token = generateToken(user.id, user.email);

    const localStorage = new LocalStorage('./scratch');
    localStorage.setItem('token', token)

    res.redirect(redirect);
}
