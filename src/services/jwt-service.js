const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET || "codecamp";
const EXP_IN = process.env.JWT_EXP || 1;

exports.sign = (payload) =>
  jwt.sign(payload, SECRET_KEY, { expiresIn: EXP_IN });

exports.verify = (token) => jwt.verify(token, SECRET_KEY);
