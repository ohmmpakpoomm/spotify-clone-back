const catchError = require("../utils/catch-error");
const createError = require("../utils/create-error");
const playlistService = require("../services/playlist-service");

exports.createPlaylist = catchError(async (req, res, next) => {
  await playlistService.createPlaylist(req.user.id);
  res.status(201).send({ message: "create playlist success" });
});

exports.getPlaylist = catchError(async (req, res, next) => {
  const playlists = await playlistService.getPlaylist(req.user.id);
  res.status(200).send({ playlists });
});

exports.deletePlaylist = catchError(async (req, res, next) => {
  await playlistService.deletePlaylistAndAllTrackInPlaylist(
    +req.params.playlistId
  );
  res.status(200).send({ message: "delete playlist success" });
});

exports.addTrackToPlaylist = catchError(async (req, res, next) => {
  await playlistService.addTrackToPlaylist(
    +req.params.playlistId,
    req.body.data.id
  );
  res.status(201).send({ message: "add track to playlist success" });
});

exports.deleteTrackInPlaylist = catchError(async (req, res, next) => {
  await playlistService.deleteTrackInPlaylist(
    +req.params.playlistId,
    +req.params.trackId
  );
  res.status(201).send({ message: "delete track in playlist success" });
});

exports.getPlaylistList = catchError(async (req, res, next) => {
  const data = await playlistService.getPlaylistList(+req.params.playlistId);
  const items = data.map((obj, index) => obj.track);
  res.status(201).send(items);
});

exports.getPlaylistById = catchError(async (req, res, next) => {
  const result = await playlistService.getPlaylistById(+req.params.playlistId);
  res.status(201).send(result);
});
exports.changePlaylistInfoById = catchError(async (req, res, next) => {
  const result = await playlistService.changePlaylistInfoById(
    +req.params.playlistId,
    req.body
  );
  res.status(200).send(result);
});
