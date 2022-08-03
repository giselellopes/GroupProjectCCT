const Project = require("../models/Project");

const LocalStorage = require('node-localstorage').LocalStorage;

const newProject = (req) => {
    const localStorage = new LocalStorage('./scratch');
    const dev_email = localStorage.getItem('logedUser');

    requirements = [];

    requirements.push(req.body.businessInformation == 'checked');
    requirements.push(req.body.businessPictures == 'checked');
    requirements.push(req.body.businessVisualIdentification == 'checked');
    requirements.push(req.body.productspriceDatabase == 'checked');

    return new Project({
        title: req.body.title,
        subtitle: req.body.subtitle,
        filename: req.file.filename,
        description: req.body.description,
        techs: req.body.techs.split(','),
        price: req.body.price,
        externalLink: req.body.externalLink,
        personalizedExtendedDevelopment: req.body.personalizedExtendedDevelopment,
        requirements,
        dev_email,
    });
}

exports.createProject = function (req, res) {
    const file = req.file;
    console.log(file)
    if (req.file) {
        return newProject(req).save(function (err) {
            if (err) {
                return res.status(400).json(err);
            }
            return res.redirect('create-project');
        });
    }
    return res.json({ Mensage: 'Choose a valid file.' })
};

exports.getAllProjects = function (req, res) {
    Project.find({}, function (err, project) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(project);
    });
};

exports.getProject = function (req, res) {
    Project.findOne({ email: req.body.email }, function (err, project) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(project);
    });
};

exports.updateProject = function (req, res) {
    Project.findOneAndUpdate({ _id: req.params.id }, req.body,
        { new: true }, function (err, project) {
            if (err) {
                res.status(400).json(err);
            }
            res.json(project);
        });
};

exports.deleteProject = function (req, res) {
    Project.findByIdAndRemove(req.params.id, function (err, project) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(project);
    });
};
