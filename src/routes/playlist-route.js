const express = require("express");

const authenticate = require("../middlewares/authenticate");
const playlistController = require("../controllers/playlist-controller");

const router = express.Router();

router.post("", authenticate, playlistController.createPlaylist);
router.get("", authenticate, playlistController.getPlaylist);
router.delete("/:playlistId", playlistController.deletePlaylist);

module.exports = router;
