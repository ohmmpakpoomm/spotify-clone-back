const express = require("express");

const validateRegister = require("../middlewares/validate-register");
const validateLogin = require("../middlewares/validate-login");

const authController = require("../controllers/auth-controller");
const validateChangePassword = require("../middlewares/validate-changePassword");

const router = express.Router();

router.post("/register", validateRegister, authController.register);
router.post("/login", validateLogin, authController.login);
router.patch(
  "/forgot-password",
  validateChangePassword,
  authController.changePassword
);

module.exports = router;
