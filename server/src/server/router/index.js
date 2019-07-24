import 'babel-polyfill';
import express from 'express';
import userController from '../controllers/userController';
import tokenController from '../controllers/tokenController';
import cryptMiddleware from '../middle/cryptMiddleware';
import validationMiddleware from '../middle/validationMiddleware';
import authMiddleware from '../middle/authMiddleware';
const router = express.Router();

router.get('/user/:id', userController.getUserById);
router.post('/login', validationMiddleware.validationOnLogin, userController.loginUser); //route for login
router.post('/user', validationMiddleware.validationOnCreateUser, cryptMiddleware, userController.createUser); //route for creating user
router.get('/user', authMiddleware, userController.getUser);
router.post('/refresh', tokenController.refreshToken);//route for refresh

module.exports = router;

