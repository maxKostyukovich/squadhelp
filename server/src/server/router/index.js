import 'babel-polyfill';
import express from 'express';
import userController from '../controllers/userController';
import tokenController from '../controllers/tokenController';
import cryptMiddleware from '../middle/cryptMiddleware';
import validationMiddleware from '../middle/validationMiddleware';
import getUserByEmail from '../middle/findUserMiddleware';
import isUserBanned from '../middle/isBannedMiddleware';
import authMiddleware from '../middle/authMiddleware';
const router = express.Router();

router.get('/user/:id', userController.getUserById);
router.post('/login', validationMiddleware.validationOnLogin, getUserByEmail, isUserBanned, userController.loginUser); //route for login
router.post('/user', validationMiddleware.validationOnCreateUser, cryptMiddleware, userController.createUser); //route for creating user
router.get('/user', authMiddleware, userController.getUser);
router.get('/all-users', authMiddleware, userController.getAllUsers);
router.put('/user/:id', userController.updateUserById);

router.post('/refresh', tokenController.refreshToken);//route for refresh
router.delete('/refresh', tokenController.deleteToken);

module.exports = router;

