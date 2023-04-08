const express = require('express');
const servicesRouter = express.Router();
const checkAuthentication = require('../middleware/checkAuthentication');


const chartsController = require('../controllers/charts');
servicesRouter.post('/charts/', checkAuthentication, chartsController.createChart);
servicesRouter.post('/charts/:chartId?', chartsController.getChart);
servicesRouter.post('/charts/:chartId?', chartsController.deleteChart);


module.exports = servicesRouter;