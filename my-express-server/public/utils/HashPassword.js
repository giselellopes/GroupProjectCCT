crypto = require("crypto")

exports.hash = async function (password) {
    console.log(password)
    const hash = await new Promise((resolve, reject) => {
        const salt = crypto.randomBytes(16).toString("hex")

        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(salt + ":" + derivedKey.toString('hex'))
        });
    }).then((value) => {
        password = value;
    })
    return password;
}

exports.verify = async function (password, hash) {
    console.log('aaa')
    return await new Promise((resolve, reject) => {
        const [salt, key] = hash.split(":")
        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(key == derivedKey.toString('hex'))
        });
    })
}