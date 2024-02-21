const prisma = require("../models/prisma");

exports.searchTrack = (data) =>
  prisma.track.findFirst({ where: { uri: data.uri } });

exports.addTrack = (data) => prisma.track.create({ data });
