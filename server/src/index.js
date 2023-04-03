const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.status(200).send('OK');
});

var authRouter = require('./routes/auth');
app.use('/auth', authRouter);


app.listen(1002, function () {
    console.log('Renondera API listening on port 1002.');
});

module.exports = router;