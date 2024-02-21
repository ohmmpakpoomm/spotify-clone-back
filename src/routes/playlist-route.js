const express = require("express");

const authenticate = require("../middlewares/authenticate");
const playlistController = require("../controllers/playlist-controller");

const router = express.Router();

router.post("", authenticate, playlistController.createPlaylist);
router.get("", authenticate, playlistController.getPlaylist);
router.delete("/:playlistId", authenticate, playlistController.deletePlaylist);

router.post(
  "/:playlistId",
  authenticate,
  playlistController.addTrackToPlaylist
);
router.delete(
  "/:playlistId/:trackId",
  authenticate,
  playlistController.deleteTrackInPlaylist
);
router.get("/:playlistId", authenticate, playlistController.getPlaylistList);

module.exports = router;
