import React, { useState } from "react";

const MovieList = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchGenre, setSearchGenre] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (movie) => {
    if (!favorites.includes(movie)) {
      setFavorites([...favorites, movie]);
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      movie.genre.toLowerCase().includes(searchGenre.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Buscar por género"
          value={searchGenre}
          onChange={(e) => setSearchGenre(e.target.value)}
        />
      </div>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>
              <strong>Género:</strong> {movie.genre}
            </p>
            <button onClick={() => handleAddToFavorites(movie)}>
              Agregar a favoritos
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Favoritos</h2>
        <ul>
          {favorites.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;