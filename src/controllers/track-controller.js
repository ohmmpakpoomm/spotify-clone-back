const catchError = require("../utils/catch-error");
const trackService = require("../services/track-service");

exports.addTrack = catchError(async (req, res, next) => {
  const track = await trackService.searchTrack(req.body);
  if (track) {
    res.status(200).send({ id: track.id });
    return;
  }

  const result = await trackService.addTrack(req.body);
  res.status(201).send({ id: result.id });
});
