const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.status(200).send('OK');
});

var authRouter = require('./routes/auth');
app.use('/auth', authRouter);

var usersRouter = require('./routes/users');
app.use('/users', usersRouter);

var servicesRouter = require('./routes/services');
app.use('/service', servicesRouter);


app.listen(PORT, function () {
    console.log(`iTools API listening on port ${PORT}.`);
});

module.exports = router;