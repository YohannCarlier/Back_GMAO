const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken')
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  authTokens: [{
    authToken: {
      type: String,
      required: true
    }
  }]
});

userSchema.plugin(uniqueValidator);


userSchema.methods.generateAuthTokenAndSaveUser = async function() {
  const authToken = jwt.sign({_id: this.id.toString()}, "MaladeBernard", {expiresIn: "24h"});
  this.authTokens.push({authToken});
  this.save();
  return authToken;
}

userSchema.statics.findUser= async(email, password) => {
  const user = await User.findOne({email});
  if(!user) throw new Error ('Erreur, Adresse mail invalide!');
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(!isPasswordValid) throw new Error('Erreur, mot de passe incorrect!')
}
module.exports = mongoose.model('User', userSchema);