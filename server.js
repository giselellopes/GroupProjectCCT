const express = require("express");
const app = express();

//config path
const path = require ('path');
app.use(express.static(path.join(__dirname + '/public')));

//config template engine
const handlebars = require('express-handlebars');
const hbs = handlebars.create({
    helpers: {
    },
    defaultLayout: 'main',
    partialsDir: ['public/partials/']
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './public');0



//config body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//config routes
const routes = require('./routes');
const { default: mongoose } = require("mongoose");
app.use('/', routes);


mongoose.connect("mongodb+srv://admin:ATGP11db@cluster0.hkmhc.mongodb.net/atgpdb")
mongoose.connection.on('Connection Succesfully', function () {
    console.log('Connected to database!')
})

app.listen(3000, function(){
    console.log("Server started on port 3000")
});