const express = require('express');
const usersRouter = express.Router();
const checkAuthentication = require('../middleware/checkAuthentication');


const usersController = require('../controllers/users');
usersRouter.get('/@me', checkAuthentication, usersController.getMyUser);
usersRouter.get('/:username?', usersController.getUser);


module.exports = usersRouter;