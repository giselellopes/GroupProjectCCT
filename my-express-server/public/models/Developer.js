const mongoose = require("mongoose");

const developerSchema = new mongoose.Schema({
    username: { type: String, unique: true, lowercase: true },
    password: String,
    firstName: String,
    lastName: String,
    bank: String,
    iban: String,
    city: String,
    state: String,
    zip: String

});


module.exports = mongoose.model('Developer', developerSchema);