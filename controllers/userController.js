const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const newUser = new User({
        email: req.body.email,
        password: hash,
      });
      newUser
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Paire login/mot de passe incorrecte" });
    }

    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      return res
        .status(401)
        .json({ message: "Paire login/mot de passe incorrecte" });
    }

    const token = await user.generateAuthTokenAndSaveUser();
    res.status(200).send({ user, token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.logout = async (req, res, next) => {
  try {
    //    req.user.authTokens = req.user.authTokens.filter((authToken) => {
    //     return authToken.authToken !== req.authToken;
    //    });
    req.user.authTokens = [];
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).json({ error });
  }
};
