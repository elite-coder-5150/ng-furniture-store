const express = require('express');
const router = express.Router();

import {UserController} from "../controllers/UserController";
const userController = new UserController();


router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.get('/users/user/:username', userController.getUser);
router.post('/users/', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
module.exports = router;
