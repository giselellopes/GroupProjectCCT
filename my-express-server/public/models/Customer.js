const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String,
    firstName: String,
    lastName: String,
    flag: {
        type: String,
        enum: ['visa', 'mastercard', 'elo']
    },
    cardNumber: String,
    cardHolder: String,
    city: String,
    state: String,
    zip: String
});

module.exports = mongoose.model('Customer', customerSchema);
