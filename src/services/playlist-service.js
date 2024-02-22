const prisma = require("../models/prisma");

exports.createPlaylist = (userId) =>
  prisma.playlist.create({
    data: {
      name: "My Playlist",
      userId,
    },
  });

exports.getPlaylist = (userId) =>
  prisma.playlist.findMany({ where: { userId } });

exports.deletePlaylist = (id) => prisma.playlist.delete({ where: { id } });

exports.deleteAllTrackInPlaylist = (playlistId) =>
  prisma.playlistList.deleteMany({ where: { playlistId } });

exports.deletePlaylistAndAllTrackInPlaylist = (id) =>
  prisma.$transaction([
    this.deleteAllTrackInPlaylist(id),
    this.deletePlaylist(id),
  ]);

exports.addTrackToPlaylist = (playlistId, trackId) =>
  prisma.playlistList.create({ data: { playlistId, trackId } });

exports.deleteTrackInPlaylist = (playlistId, trackId) =>
  prisma.playlistList.delete({
    where: { playlistId_trackId: { playlistId, trackId } },
  });

exports.getPlaylistList = (playlistId) =>
  prisma.playlistList.findMany({
    where: { playlistId },
    include: { track: true },
  });

exports.getPlaylistById = (id) => prisma.playlist.findFirst({ where: { id } });

exports.changePlaylistInfoById = (id, data) =>
  prisma.playlist.update({ where: { id }, data });
