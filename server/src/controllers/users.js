const db = require('../models/db');
const Database = new db();

/***
 * @param {Object} req solicitud del cliente al servidor
 * @param {Object} res respuesta del servidor al cliente
 */
const getMyUser = (req, res) => {
    const decoded = req.decoded;
    Database.query('SELECT id, username, email, created_at, updated_at, deleted_at, is_active, is_verified, is_banned FROM accounts WHERE id = ?', [decoded.id]).then(result => {
        res.status(200).json(result[0])
    }).catch(err => {
        res.status(500).json({ message: 'There has been an error.' })
    })
};

const getUser = (req, res) => {
    const { username } = req.params;
    if (!username) return res.status(409).json({ message: 'Required parameter not found in URL.' })
    Database.query('SELECT id, username, created_at, updated_at, deleted_at, is_active, is_verified, is_banned FROM accounts WHERE username = ?', [username]).then(result => {
        if (result.length > 0) {
            res.status(200).json(result[0])
        } else {
            res.status(409).json({ message: 'User not found.' })
        }
    }).catch(err => {
        res.status(500).json({ message: 'There has been an error.' })
    })
};


module.exports = {
    getMyUser,
    getUser
};