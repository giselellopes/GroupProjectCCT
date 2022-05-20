const Developer = require("./developer");

exports.createDeveloper = function(req, res){
    let newdev = new Developer(req.body);
    newdev.save(function(err, developer) {
        if(err){
            res.status(400).json(err);
        }
        res.json(developer);
    });
};

exports.getDeveloper = function(req, res) {
    Developer.find({}, function(err, developer){
        if(err) {
            res.status(400).json(err);
        }
        res.json(developer);
    });
};

exports.getDeveloper = function(req, res) {
    Developer.findOne({_id: req.params.id}, function 
    (err, customer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(developer);
    });
};

exports.updateDeveloper = function(req, res) {
    Developer.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, customer){
        if(err) {
            res.status(400).json(err);
        }
        res.json(developer);
    });
};

exports.deleteDeveloper = function(req, res) {
    Developer.findByIdAndRemove(req.params.id, function (err, developer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(developer);
    });
};
    