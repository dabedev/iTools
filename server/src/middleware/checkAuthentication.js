const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/session.json');

const checkAuthentication = (req, res, next) => {
    try {
        var token = req.headers['authorization'].split(/ +/g)[1];
        if (token) {
            jwt.verify(token, SECRET, (err, decoded) => {
                if (err) {
                    res.status(401).json({ message: 'Invalid token.' });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            res.status(401).json({ message: 'Token not found.' });
        }
    } catch (e) {
        res.status(401).json({ message: 'Invalid format.' })
    }
};

module.exports = checkAuthentication;