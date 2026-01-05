const express = require("express");
const cors = require("cors");
const movies = require("./tests/movies");

const app = express();
app.use(cors());

app.get("/movies", (req, res) => res.json(movies));

app.get("/movies/:id", (req, res) => {
  const movie = movies.find(m => m.id == req.params.id);
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
});

const PORT = 5000;
app.listen(PORT, () => console.log("Backend running on port " + PORT));

module.exports = app;
