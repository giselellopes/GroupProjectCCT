const   http = require("http"),
        logger = require("morgan"),
        express = require("express"),
        app = express(),
        bodyParser = require("body-parser"),
        mongoose = require("mongoose"),
        dotenv = require("dotenv");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://admin:ATGP11db@cluster0.hkmhc.mongodb.net/?retryWrites=true&w=majority")


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/register.handlebars");
})


/*let app = express();
let port = process.env.PORT || 3000;

dotenv.config();

app.use(bodyParser.json());
app.use(logger("tiny"));
app.use(require('./routes'));


mongoose.connect(process.env.atgpdbURI, { useNewUrlParser: true,
useUnifiedTopology: true })
        .then((result) => console.log('connected to atgpdb'))
        .catch((err) => console.log(err));*/

app.listen(3000, function(){
    console.log("Server is working");
})