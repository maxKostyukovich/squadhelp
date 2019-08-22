import 'babel-polyfill';
import express from 'express';
import userController from '../controllers/userController';
import tokenController from '../controllers/tokenController';
import contestController from '../controllers/contestController';
import cryptMiddleware from '../middle/cryptMiddleware';
import validationMiddleware from '../middle/validationMiddleware';
import getUserByEmail from '../middle/findUserMiddleware';
import isUserBanned from '../middle/isBannedMiddleware';
import authMiddleware from '../middle/authMiddleware';
import switchAbilities from '../middle/switchAbilities';

const router = express.Router();

router.post('/login', validationMiddleware.validationOnLogin, getUserByEmail, isUserBanned, userController.loginUser); //route for login
router.post('/user', validationMiddleware.validationOnCreateUser, cryptMiddleware, userController.createUser); //route for creating user
router.get('/user', authMiddleware, switchAbilities, userController.getUser);
router.get('/all-users', authMiddleware, userController.getAllUsers);
router.put('/user/:id', authMiddleware, validationMiddleware.validationOnUpdateUser, userController.updateUserById);

router.post('/refresh', tokenController.refreshToken);//route for refresh
router.delete('/refresh', tokenController.deleteToken);

router.post('/bundle', authMiddleware, contestController.createBundle);
router.get('/bundle/:id', contestController.getBundle);
module.exports = router;

