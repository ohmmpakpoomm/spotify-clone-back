const jwtService = require("../services/jwt-service");
const userService = require("../services/user-service");
const catchError = require("../utils/catch-error");
const createError = require("../utils/create-error");

const authenticate = catchError(async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    createError("invalid authorization headers", 401);
  }
  const token = req.headers.authorization.split(" ")[1];
  const payload = jwtService.verify(token);

  const user = await userService.findUserById(payload.userId);
  if (!user) {
    createError("user not found", 401);
  }
  delete user.password;
  req.user = user;
  next();
});

module.exports = authenticate;
