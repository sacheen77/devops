import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import defaultPoster from "../assets/defaultPoster.jpg";
import "./MovieDetails.css";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch(() => setMovie(null));
  }, [id]);

  if (!movie) return <h2 className="loading">Loading...</h2>;

  return (
    <div className="details-container">

      <div className="details-card">
        <img
          src={movie.poster || defaultPoster}
          onError={(e) => (e.target.src = defaultPoster)}
          alt={movie.title}
          className="details-poster"
        />

        <div className="details-info">
          <h1>{movie.title}</h1>

          <div className="chip-group">
            <span className="chip">{movie.genre}</span>
            <span className="chip">⭐ {movie.rating}</span>
            <span className="chip">{movie.year}</span>
            <span className="chip">🎬 {movie.language || "English"}</span>
          </div>

          <p className="description">{movie.description}</p>

          <div className="meta-box">
            <div><strong>Director:</strong> {movie.director || "Unknown"}</div>
            <div><strong>Duration:</strong> {movie.duration || "2h 10m"}</div>
          </div>

          <Link to="/" className="back-btn">⬅ Back to Movies</Link>
        </div>
      </div>
    </div>
  );
}
