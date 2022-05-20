const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    email: {type: String, unique: true, lowercase: true},
    password: String,
    firstName: String,
    lastName: String,
    flag: {
        type: String, 
        enum: ['visa', 'mastercard', 'elo']
    },
    lastFourDIgits: Number,
    cardHolder: String,
    address: String,
    phone: Number 

});

module.exports = mongoose.model('Customer', customerSchema);