import express from 'express';
import axios from 'axios';

const app = express();

app.post('/compare', (req, res) => {
    const { q1, q2 } = req.query;
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

});