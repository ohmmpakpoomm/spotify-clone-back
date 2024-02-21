const express = require("express");

const authenticate = require("../middlewares/authenticate");

const trackController = require("../controllers/track-controller");

const router = express.Router();

router.post("", authenticate, trackController.addTrack);

module.exports = router;
