const express = require("express");
const cors = require("cors");

const notFound = require("./middlewares/not-found");
const error = require("./middlewares/error");
const authRoute = require("./routes/auth-route");
const musicRoute = require("./routes/music-route");
const playlistRoute = require("./routes/playlist-route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/musics", musicRoute);
app.use("/playlists", playlistRoute);

app.use(notFound);
app.use(error);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
