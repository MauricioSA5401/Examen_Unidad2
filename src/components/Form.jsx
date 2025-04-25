import React, { useState } from "react";

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim() && genre.trim()) {
      const newMovie = { id: Date.now(), title, description, genre };
      addMovie(newMovie);

      // Guardar en localStorage
      const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
      storedMovies.push(newMovie);
      localStorage.setItem("movies", JSON.stringify(storedMovies));

      setTitle("");
      setDescription("");
      setGenre("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="">Selecciona un género</option>
        <option value="Acción">Acción</option>
        <option value="Comedia">Comedia</option>
        <option value="Drama">Drama</option>
        <option value="Terror">Terror</option>
        <option value="Ciencia Ficción">Ciencia Ficción</option>
      </select>
      <button type="submit">Agregar Película</button>
    </form>
  );
};

export default MovieForm;