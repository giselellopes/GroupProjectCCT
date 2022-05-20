const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
    email: {type: String, unique: true, lowercase: true},
    password: String,
    firstName: String,
    lastName: String,
    bank: String,
    iban: String,
    linkedin: {type: String, lowercase: true},
    skills: String,
    address: String,
    phone: Number 

});


module.exports = mongoose.model('Developer', developerSchema);