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
