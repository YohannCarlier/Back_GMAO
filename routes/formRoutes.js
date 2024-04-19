// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
// const auth = require('auth');

// Route pour créer un nouveau formulaire
// router.get('/', auth)
router.post('/form', formController.createForm);

module.exports = router;
