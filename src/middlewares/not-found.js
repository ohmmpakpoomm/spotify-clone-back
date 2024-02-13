module.exports = (req, res, next) => {
  res.status(404).send({ message: "resource not found on this server" });
};
