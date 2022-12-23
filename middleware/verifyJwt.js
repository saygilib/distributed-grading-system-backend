const jwt = require('jsonwebtoken');
const secret = require('../config/authConfig').secret;
const User = require('../models/users');

const verifyToken = (req, res, next) => {
    let token = req.headers["authorization"];
    if (!token) {
      return res.status(403).send({
        message: "No token provided!",
      });
    }
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!",
        });
      }
      req.userId = decoded.id;
      next();
    });
  };
  const verifyJwt = {
    verifyToken: verifyToken,
  };
  
  module.exports = verifyJwt;