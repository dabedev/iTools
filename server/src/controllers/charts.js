const db = require('../models/db');
const Database = new db();

/***
 * @param {Object} req solicitud del cliente al servidor
 * @param {Object} res respuesta del servidor al cliente
 */
const createChart = (req, res) => {
    const { name, description } = req.body;
    const decoded = req.decoded;
    if (!name) return res.status(400).json({ message: 'Incomplete fields.' });
    Database.query('INSERT INTO accounts (name, description, created_by) VALUES (?, ?, ?)', [name, description, decoded.id]).then(result => {
        res.status(200).json(result[0])
    }).catch(err => {
        res.status(500).json({ message: 'There has been an error.' })
    })
};

const getChart = (req, res) => {
    const { chartId } = req.params.username;
    if (!chartId) return res.status(409).json({ message: 'Required parameter not found in URL.' });
    Database.query('SELECT id, name, description, created_by, created_at, updated_at FROM charts WHERE id = ?', [chartId]).then(result => {
        if (result.length > 0) {
            res.status(200).json(result[0])
        } else {
            res.status(409).json({ message: 'Chart not found.' })
        }
    }).catch(err => {
        res.status(500).json({ message: 'There has been an error.' })
    })
};

const deleteChart = (req, res) => {
    const { chartId } = req.params;
    const decoded = req.decoded;
    if (!chartId) return res.status(409).json({ message: 'Required parameter not found in URL.' });
    Database.query('DELETE FROM charts WHERE id = ? AND created_by = ?', [chartId, decoded.id]).then(result => {
        if (result.length > 0) {
            res.status(200).json(result[0])
        } else {
            res.status(409).json({ message: 'Chart not found or you don\'t have permissions to delete this chart.' })
        }
    }).catch(err => {
        res.status(500).json({ message: 'There has been an error.' })
    })
}

module.exports = {
    createChart,
    getChart,
    deleteChart
};