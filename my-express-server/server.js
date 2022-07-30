const express = require("express");
const mongoose = require("mongoose");

const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const routes = require('./routes');
const devRoutes = require('./routes/DeveloperRoutes');
const customerRoutes = require('./routes/CustomerRoutes');
const loginRoutes = require('./routes/LoginRoutes');

const app = express();

//config path
app.use(express.static(path.join(__dirname + '/public')));

//config template engine
const hbs = handlebars.create({
    helpers: {
    },
    defaultLayout: 'main',
    partialsDir: ['public/partials/']
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './public');

//config body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//config routes
app.use('/', routes);
app.use('/', devRoutes);
app.use('/', customerRoutes);
app.use('/', loginRoutes);

mongoose.connect("mongodb+srv://admin:ATGP11db@cluster0.hkmhc.mongodb.net/atgpdb2")
    .then(async () => {
        app.listen(3000, function () {
            console.log("Server started on port 3000")
        });

        //const Developer = require("./public/models/Developer");
        //await Developer.deleteMany({})
    })
    .catch((err) => console.log(err))