const Customer = require("../models/Customer");
const { hash } = require('../utils/HashPassword');

const confirmPassword = function (password, confirmPassword) {

    return password == confirmPassword;
}

exports.createCustomer = function (req, res) {
    Customer.findOne({ email: req.body.email }, async function (err, customer) {
        if (err) {
            return res.status(400).json(err);
        }

        console.log('aaa ', customer)

        if (customer != null) {
            return res.status(400).json({ Mensage: 'Email is already registered.' })
        }
        if (!confirmPassword(req.body.password, req.body.confirmPassword)) {
            return res.status(300).json({ Mensage: 'Passwords do not match' })
        }

        console.log(req.body)
        const newCustomer = new Customer(req.body);

        newCustomer.password = await hash(newCustomer.password);

        console.log(newCustomer)

        newCustomer.save(function (err) {
            if (err) {
                return res.status(400).json(err);
            }
            res.redirect('login');
        });
    });
};

exports.getAllCustomers = function (req, res) {
    Customer.find({}, function (err, dustomer) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(dustomer);
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
