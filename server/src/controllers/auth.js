const db = require('../models/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuIdV4 } = require('uuid');
const Database = new db();
const { SALT_ROUNDS: salt_rounds, SECRET: secret } = require('../config/session.json');
const signInCD = new Map();

/***
 * @param {Object} req solicitud del cliente al servidor
 * @param {Object} res respuesta del servidor al cliente
 */
const signIn = (req, res) => {
    var [email, password] = [req.body.email, req.body.password];
    if (!email || !password) {
        res.status(400).json({ message: 'Campos incompletos.' });
        return;
    }

    const attempts = signInCD.get(email) || { count: 0, lastAttempt: Date.now() - 300000 };

    if (attempts.count >= 5 && Date.now() - attempts.lastAttempt < 300000) {
        const timeLeft = Math.ceil((300000 - (Date.now() - attempts.lastAttempt)) / 1000 / 60);
        res.status(429).json({ message: `Demasiados intentos fallidos, intente de nuevo en ${timeLeft} minutos.` });
        return;
    }

    Database.query('SELECT id, email, password FROM account WHERE email = ?', [email]).then(resultLogin => {
        if (resultLogin.length > 0) {
            bcrypt.compare(password, resultLogin[0].password, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'Error al iniciar sesión.' });
                } else {
                    if (result) {
                        signInCD.set(email, { count: 0, lastAttempt: Date.now() });
                        var token = jwt.sign({ email: email, id: resultLogin[0].id }, secret, { expiresIn: '24h' });
                        var userData = {
                            id: resultLogin[0].id,
                            email: resultLogin[0].email
                        };
                        res.status(200).json({ message: 'Te has logueado correctamente.', token: token, userData: userData });
                    } else {
                        signInCD.set(email, { count: attempts.count + 1, lastAttempt: Date.now() });
                        res.status(401).json({ message: 'Contraseña incorrecta.' });
                    }
                }
            });
        } else {
            signInCD.set(email, { count: attempts.count + 1, lastAttempt: Date.now() });
            res.status(401).json({ message: 'Usuario no encontrado.' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Error al iniciar sesión.' });
    });
};

/***
* @param {Object} req solicitud del cliente al servidor
* @param {Object} res respuesta del servidor al cliente
*/
const signUp = (req, res) => {
    var [email, username, password] = [req.body.email, req.body.username, req.body.password];
    if (!email || !username || !password) {
        res.status(400).json({ message: 'Campos incompletos.' });
        return;
    }
    Database.query('SELECT * FROM account WHERE email = ?', [email]).then(result => {
        if (result.length > 0) {
            res.status(500).json({ message: 'El correo electrónico ya está en uso.' });
        } else {
            bcrypt.genSalt(salt_rounds, function (err, salt) {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'Error al registrar el usuario.' });
                }
                bcrypt.hash(password, salt, function (err, hash) {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ message: 'Error al registrar el usuario.' });
                    }
                    password = hash;
                    const userId = uuIdV4();
                    Database.query('INSERT INTO account (id, email, username, password) VALUES (?, ?, ?, ?)', [userId, email, username, password]).then(() => {
                        res.status(200).json({ message: 'Usuario registrado correctamente.' });
                    }).catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'Error al registrar el usuario.' });
                    });
                });
            });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Error al registrar el usuario.' });
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
        res.status(400).json({ message: 'Contraseña no especificada.' });
        return;
    }
    Database.query('SELECT * FROM account WHERE email = ?', [userEmail]).then(result => {
        if (result.length > 0) {
            bcrypt.genSalt(salt_rounds, function (err, salt) {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'Error al cambiar la contraseña del usuario.' });
                }
                bcrypt.hash(password, salt, function (err, hash) {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ message: 'Error al cambiar la contraseña del usuario.' });
                    }
                    Database.query('UPDATE account SET password = ? WHERE email = ?', [hash, userEmail]).then(() => {
                        res.status(200).json({ message: 'Contraseña cambiada correctamente.' });
                    }).catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'Error al cambiar la contraseña del usuario.' });
                    });
                });
            });
        } else {
            res.status(500).json({ message: 'Error al cambiar la contraseña del usuario.' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Error al cambiar la contraseña del usuario.' });
    });
};

module.exports = {
    signIn,
    signUp,
    resetPassword
};