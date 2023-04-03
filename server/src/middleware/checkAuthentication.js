const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/session.json');

const checkAuthentication = (req, res, next) => {
    var token = req.headers['Authorization'].split(/ +/g)[1];
    if (token) {
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: 'Token inválido.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'Token no encontrado.' });
    }
};

module.exports = checkAuthentication;