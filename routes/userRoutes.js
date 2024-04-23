const express = require('express');
const router = express.Router();
const authentification = require('../middleware/authentification');

const userController = require('../controllers/userController');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/logout',authentification, userController.logout);
module.exports = router;