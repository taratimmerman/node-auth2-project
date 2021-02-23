const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../../config/secret.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(!token){
    res.status(401).json("Token please!");
  }else{
    jwt.verify(token,jwtSecret, (err,decoded)=>{
      if(err){
        res.status(401).json("You shall not pass! Cause: " + err.message);
      }else{
        req.decodedToken = decoded;
        next();
      }
    });
  }
};
