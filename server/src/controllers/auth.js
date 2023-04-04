const db = require('../models/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuIdV4 } = require('uuid');
const Database = new db();
const { SALT_ROUNDS, SECRET } = require('../config/session.json');
const signInCD = new Map();

/***
 * @param {Object} req solicitud del cliente al servidor
 * @param {Object} res respuesta del servidor al cliente
 */
const signIn = (req, res) => {
    var [email, password] = [req.body.email, req.body.password];
    if (!email || !password) {
        res.status(400).json({ message: 'Incomplete fields.' });
        return;
    }

    const attempts = signInCD.get(email) || { count: 0, lastAttempt: Date.now() - 300000 };

    if (attempts.count >= 5 && Date.now() - attempts.lastAttempt < 300000) {
        const timeLeft = Math.ceil((300000 - (Date.now() - attempts.lastAttempt)) / 1000 / 60);
        res.status(429).json({ message: `Too many failed attempts, please try again in ${timeLeft} minutes.` });
        return;
    }

    Database.query('SELECT id, email, password FROM accounts WHERE email = ?', [email]).then(resultLogin => {
        if (resultLogin.length > 0) {
            bcrypt.compare(password, resultLogin[0].password, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'Error logging in.' });
                } else {
                    if (result) {
                        signInCD.set(email, { count: 0, lastAttempt: Date.now() });
                        var token = jwt.sign({ email: email, id: resultLogin[0].id }, SECRET, { expiresIn: '8h' });
                        var userData = {
                            id: resultLogin[0].id,
                            email: resultLogin[0].email
                        };
                        res.status(200).json({ message: 'Logged in successfully.', token: token, userData: userData });
                    } else {
                        signInCD.set(email, { count: attempts.count + 1, lastAttempt: Date.now() });
                        res.status(401).json({ message: 'Incorrect password.' });
                    }
                }
            });
        } else {
            signInCD.set(email, { count: attempts.count + 1, lastAttempt: Date.now() });
            res.status(401).json({ message: 'User not found.' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Error logging in.' });
    });
};


/***
* @param {Object} req solicitud del cliente al servidor
* @param {Object} res respuesta del servidor al cliente
*/
const signUp = (req, res) => {
    var [email, username, password] = [req.body.email, req.body.username, req.body.password];
    if (!email || !username || !password) {
        res.status(400).json({ message: 'Incomplete fields.' });
        return;
    }
    Database.query('SELECT * FROM accounts WHERE email = ?', [email]).then(result => {
        if (result.length > 0) {
            res.status(500).json({ message: 'Email already in use.' });
        } else {
            bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'Error registering user.' });
                }
                bcrypt.hash(password, salt, function (err, hash) {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ message: 'Error registering user.' });
                    }
                    password = hash;
                    const userId = uuIdV4();
                    Database.query('INSERT INTO accounts (id, email, username, password) VALUES (?, ?, ?, ?)', [userId, email, username, password]).then(() => {
                        res.status(200).json({ message: 'User registered successfully.' });
                    }).catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'Error registering user.' });
                    });
                });
            });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Error registering user.' });
    });
};


/***
 * @param {Object} req solicitud del cliente al servidor
 * @param {Object} res respuesta del servidor al cliente
 */
const resetPassword = (req, res) => {
    const decoded = req.decoded;
    const userEmail = decoded.email;
    const password = req.body.password;
    if (!password) {
        res.status(400).json({ message: 'Password not specified.' });
        return;
    }
    Database.query('SELECT * FROM accounts WHERE email = ?', [userEmail]).then(result => {
        if (result.length > 0) {
            bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'Error changing user password.' });
                }
                bcrypt.hash(password, salt, function (err, hash) {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ message: 'Error changing user password.' });
                    }
                    Database.query('UPDATE accounts SET password = ? WHERE email = ?', [hash, userEmail]).then(() => {
                        res.status(200).json({ message: 'Password changed successfully.' });
                    }).catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'Error changing user password.' });
                    });
                });
            });
        } else {
            res.status(500).json({ message: 'Error changing user password.' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Error changing user password.' });
    });
};

const refreshToken = (req, res) => {
    const oldToken = req.headers.authorization?.split(/ +/g)[1];
    if (!oldToken) {
        return res.status(401).json({ message: 'Missing access token.' });
    }

    jwt.verify(oldToken, SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid access token.' });
        }

        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
            return res.status(401).json({ message: 'Access token has expired.' });
        }

        const newToken = jwt.sign({ email: decodedToken.email, id: decodedToken.id }, SECRET, { expiresIn: '8h' });
        const userData = {
            id: decodedToken.id,
            email: decodedToken.email,
        };
        res.status(200).json({ message: 'Token refreshed successfully.', token: newToken, userData: userData });
    });
};


module.exports = {
    signIn,
    signUp,
    resetPassword,
    refreshToken
};