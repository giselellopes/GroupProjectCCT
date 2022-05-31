const   express = require("express"),
        app = express(),
        bodyParser = require("body-parser"),
        mongoose = require("mongoose");
        
    
app.use(bodyParser.urlencoded({extended: true}));

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

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/register.handlebars");
})

app.post("/", function(req, res) {
    let newDeveloper = new Developer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
        bank: req.body.bank,
        iban: req.body.iban,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    })
    newDeveloper.save();
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