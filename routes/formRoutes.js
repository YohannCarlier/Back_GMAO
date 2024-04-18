// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Route pour créer un nouveau formulaire
router.post('/form', formController.createForm);

module.exports = router;
