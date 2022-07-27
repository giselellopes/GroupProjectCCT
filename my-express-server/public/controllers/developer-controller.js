const Developer = require("../models/Developer");

exports.createDeveloper = async function (req, res) {
    const newDev = new Developer(req.body);
    console.log(newDev)
    //await Developer.remove()
    await newDev.save(function (err) {
        if (err) {

            res.status(400).json({ Mensage: err });
        }
        res.redirect('proposal');
    });
};

exports.getDeveloper = async function (req, res) {
    const devs = await Developer.find()
    res.json(devs)
    // await Dev.find({}, function (err, developer) {
    //     if (err) {
    //         res.status(400).json(err);
    //     }
    //     res.json(developer);
    // });
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
