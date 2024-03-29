const catchError = require("../utils/catch-error");
const userService = require("../services/user-service");
const createError = require("../utils/create-error");
const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-service");

exports.register = catchError(async (req, res, next) => {
  const existUser = await userService.findUserByEmailOrMobile(
    req.body.email || req.body.mobile
  );
  if (existUser) {
    createError("email or mobile was used", 400);
  }

  req.body.password = await hashService.hash(req.body.password);
  const newUser = await userService.createUser(req.body);
  delete newUser.password;
  const payload = { userId: newUser.id };
  const accessToken = jwtService.sign(payload);

  res.status(201).send({ accessToken, newUser });
});

exports.login = catchError(async (req, res, next) => {
  const user = await userService.login(req.body);
  const comparePassword = await hashService.compare(
    req.body.password,
    user.password
  );
  if (!comparePassword) {
    res.status(401).send({ message: "login failed" });
  }
  delete user.password;
  const payload = { userId: user.id };
  const accessToken = jwtService.sign(payload);
  res.status(200).send({ accessToken: accessToken, user: user });
});

exports.changePassword = catchError(async (req, res, next) => {
  const existUser = await userService.findUserByEmailOrMobile(
    req.body.email || req.body.mobile
  );
  if (!existUser) {
    createError("user not found", 400);
  }
  req.body.password = await hashService.hash(req.body.password);
  await userService.updateUserByEmailOrMobile(
    req.body.password,
    req.body.email || req.body.mobile
  );
  res.status(200).send({ message: "change password success" });
});

exports.getMe = catchError(async (req, res, next) => {
  res.status(200).send({ user: req.user });
});

exports.deleteUser = catchError(async (req, res, next) => {
  await userService.deleteUser(+req.params.userId);
  res.status(200).send({ message: "delete user success" });
});
