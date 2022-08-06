const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    filename: String,
    description: String,
    createdAt: { type: Date, default: Date.now() },
    techs: [String],
    price: Number,
    externalLink: String,
    personalizedExtendedDevelopment: Boolean,
    requirements: [String],
    dev_email: String,
});

module.exports = mongoose.model('Project', projectSchema);