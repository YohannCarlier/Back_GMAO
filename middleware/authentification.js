const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authentification = async(req, res, next) => {
    try{
        const authToken= req.header('Authorization').replace('Bearer ','');
        const decodedToken= jwt.verify(authToken, "MaladeBernard");
        console.log("Le token est" + authToken);
        console.log("Le token décodé est" + decodedToken);
        const user = await User.findOne({ _id: decodedToken._id, 'authTokens.authToken': authToken });
        console.log('Le user est' + user);
        if(!user) throw new Error();

        req.authToken = authToken;
        req.user = user;
        next();
    }catch(e){
        res.status(401).send('Merci de vous authentifier!');
    }
}

module.exports = authentification;