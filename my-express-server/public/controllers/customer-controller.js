const Customer = require("../models/customer");

exports.createCustomer = function (req, res) {
    let newcustomer = new Customer(req.body);
    newcustomer.save(function (err, customer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(customer);
    });
};

exports.getCustomer = function (req, res) {
    Customer.find({}, function (err, customer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(customer);
    });
};

exports.getUser = function (req, res) {
    Customer.findOne({ _id: req.params.id }, function
        (err, customer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(customer);
    });
};

exports.updateCustomer = function (req, res) {
    Customer.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, customer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(customer);
    });
};

exports.deleteCustomer = function (req, res) {
    Customer.findByIdAndRemove(req.params.id, function (err, customer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(customer);
    });
};
