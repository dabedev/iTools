const db = require('../models/db');
const { v4: uuIdV4 } = require('uuid');
const Database = new db();
const { SALT_ROUNDS, SECRET } = require('../config/session.json');

/***
 * @param {Object} req solicitud del cliente al servidor
 * @param {Object} res respuesta del servidor al cliente
 */
const getMyUser = (req, res) => {
    const decoded = req.decoded;
    Database.query('SELECT id, username, email, created_at, updated_at, deleted_at, is_active, is_verified, is_banned FROM accounts WHERE id=?', [decoded.id]).then(result => {
        res.json(result[0])
    }).catch(err => {
        res.json({ message: 'The has been an error.' })
    })
};


module.exports = {
    getMyUser
};