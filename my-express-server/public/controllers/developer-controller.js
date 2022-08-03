const Developer = require("../models/Developer");
const { hash } = require('../utils/HashPassword');

const confirmPassword = function (password, confirmPassword) {

    return password == confirmPassword;
}

exports.createDeveloper = function (req, res) {

    Developer.findOne({ email: req.body.email }, async function (err, developer) {
        if (err) {
            return res.status(400).json(err);
        }
        if (developer != null) {
            return res.status(400).json({ Mensage: 'Email is already registered.' })
        }
        if (!confirmPassword(req.body.password, req.body.confirmPassword)) {
            return res.status(300).json({ Mensage: 'Passwords do not match' })
        }
        const newDev = new Developer(req.body);

        newDev.password = await hash(newDev.password)

        newDev.save(function (err) {
            if (err) {
                return res.status(400).json(err);
            }
            res.redirect('login');
        });
    });
};

exports.getAllDevelopers = function (req, res) {
    Developer.find({}, function (err, developer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(developer);
    });
};

exports.getDeveloper = function (req, res) {
    Developer.findOne({ email: req.body.email }, function (err, developer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(developer);
    });
};

exports.updateDeveloper = function (req, res) {
    Developer.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, customer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(developer);
    });
};

exports.deleteDeveloper = function (req, res) {
    Developer.findByIdAndRemove(req.params.id, function (err, developer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(developer);
    });
};
