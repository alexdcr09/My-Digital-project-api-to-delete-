const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require('cors');

const app = express();
app.use(cors())

const readVideo = () => JSON.parse(fs.readFileSync("./video.json").toString()).map(video => ({
  ...video,}));

// simple route
app.get("/video", (req, res) => {
    res.json(readVideo());
  });

app.get("/video/:id", (req, res) => {

  // Récupère la liste des vidéos
  const videos = readVideo();
  const video = videos.find((video) => video.id === Number(req.params.id));

  res.json(video);
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});