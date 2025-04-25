import React, { useState, useEffect } from "react";
import MovieForm from "./components/Form";
import MovieList from "./components/List";
import "./App.css";
const App = () => {
  const [movies, setMovies] = useState([]);

  // Leer las películas desde localStorage al cargar el componente
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(storedMovies);
  }, []);

  // Función para agregar una nueva película
  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <div>
      <h1>Lista de Películas</h1>
      <MovieForm addMovie={addMovie} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;