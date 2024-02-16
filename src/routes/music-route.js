const express = require("express");

const authenticate = require("../middlewares/authenticate");

const musicController = require("../controllers/music-controller");

const router = express.Router();

router.get("/search", authenticate, musicController.searchTrack);

module.exports = router;
