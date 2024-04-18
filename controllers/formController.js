// controllers/formController.js
const Form = require('../models/formModel');

// Fonction pour gérer la création d'un nouveau formulaire
exports.createForm = async (req, res) => {
  try {
    const newForm = new Form(req.body);
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du formulaire :", error);
    res.status(400).json({ message: error.message });
  }
};
