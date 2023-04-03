const express = require('express');
const authRouter = express.Router();
const checkAuthentication = require('../middleware/checkAuthentication');


const authController = require('../controllers/auth');
authRouter.post('/signup', authController.signUp);
authRouter.post('/signin', authController.signIn);
authRouter.patch('/reset-password', checkAuthentication, authController.resetPassword);


module.exports = authRouter;