const { sign } = require("jsonwebtoken");

require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
})

module.exports = function generateToken(userId, email) {
    const token = sign({ email }, process.env.TOKEN_KEY, {
        subject: userId, expiresIn: "60s"
    }
    );
    return token;
}
