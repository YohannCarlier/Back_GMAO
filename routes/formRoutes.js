// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
const authentification = require('../middleware/authentification');

// Route pour créer un nouveau formulaire
router.post('/form', authentification,formController.createForm);

module.exports = router;
