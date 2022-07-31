const Project = require("../models/Project");
const generateToken = require('../utils/GenerateToken');

const LocalStorage = require('node-localstorage').LocalStorage;

exports.createProject = function (req, res) {
    if (req.file) {
        const localStorage = new LocalStorage('./scratch');
        const dev_email = localStorage.getItem('logedUser');

        const body = req.body;

        requirements = [];

        requirements.push(body.businessInformation == 'checked');
        requirements.push(body.businessPictures == 'checked');
        requirements.push(body.businessVisualIdentification == 'checked');
        requirements.push(body.productspriceDatabase == 'checked');

        const newProject = new Project({
            title: body.title,
            subtitle: body.subtitle,
            description: body.description,
            techs: body.techs.split(','),
            price: body.price,
            externalLink: body.externalLink,
            personalizedExtendedDevelopment: body.personalizedExtendedDevelopment,
            requirements,
            dev_email,
        });

        newProject.save(function (err) {
            if (err) {
                return res.status(400).json(err);
            }
            res.redirect('create-project');
        });
    }
    return res.json({ Mensage: 'Choose a valid file.' })
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
