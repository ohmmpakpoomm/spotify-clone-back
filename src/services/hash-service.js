const bcrypt = require("bcryptjs");

exports.hash = (input) => bcrypt.hash(input, 13);

exports.compare = (input, hashed) => bcrypt.compare(input, hashed);
