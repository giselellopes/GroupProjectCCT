const Developer = require("../models/Developer");

async function emailAlreadyExists(username) {
    const q = Developer.find({ username }, function (err, developer) {
        if (err) return null;
        return developer
    });
}

exports.createDeveloper = function (req, res) {

    Developer.findOne({ username: req.body.username }, function (err, developer) {
        if (err) {
            return res.status(400).json(err);
        }
        if (developer != null) {
            return res.status(400).json({ Mensage: 'Email is already registered.' })
        }
        const newDev = new Developer(req.body);

        newDev.save(function (err) {
            if (err) {
                return res.status(400).json(err);
            }
            res.redirect('proposal');
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
    Developer.findOne({ username: req.body.email }, function (err, developer) {
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
