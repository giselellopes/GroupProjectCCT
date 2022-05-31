const developer = require("./models/developer");

exports.createDeveloper = function (req, res) {
    developer.create(req.body).then(dev => {
        res.render('login');
    }).catch((err) => {
        console.log(err)
        res.status(400).json(err);
    })
};

exports.getDevelopers = function (req, res) {
    developer.find({}).then((list) => {
        res.status(200).json({list: list})
    }).catch((err, dev) => {
        if (err) {
            res.status(400).json(err);
        }
    });
};

exports.login = function (req, res) {
    
}

exports.getDeveloper = function (req, res) {
    developer.findOne({ _id: req.params.id }, function
        (err, customer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(developer);
    });
};

exports.updateDeveloper = function (req, res) {
    developer.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, customer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(developer);
    });
};

exports.deleteDeveloper = function (req, res) {
    developer.findByIdAndRemove(req.params.id, function (err, dev) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(dev);
    });
};
