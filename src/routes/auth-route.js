const express = require("express");

const validateRegister = require("../middlewares/validate-register");
const validateLogin = require("../middlewares/validate-login");

const authController = require("../controllers/auth-controller");
const validateChangePassword = require("../middlewares/validate-changePassword");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/register", validateRegister, authController.register);
router.post("/login", validateLogin, authController.login);
router.patch(
  "/change-password",
  validateChangePassword,
  authController.changePassword
);
router.delete("/delete/:userId", authenticate, authController.deleteUser);
router.get("/me", authenticate, authController.getMe);

module.exports = router;
