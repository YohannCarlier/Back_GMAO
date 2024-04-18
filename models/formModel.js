const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  dateDeLaDemande: {
    type: Date,
    required: true
  },
  interventionType: {
    type: String,
    required: true,
    enum: ['Maintenance', 'Réparation', 'Installation', 'Controle'] // Assurez-vous que ces valeurs correspondent à celles de votre formulaire
  },
  description: {
    type: String,
    required: true
  },
  statut: {
    type: String,
    required: true,
    enum: ['En attente', 'En cours', 'Terminé']
  },
  nomDuDemandeur: {
    type: String,
    required: true
  }
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
