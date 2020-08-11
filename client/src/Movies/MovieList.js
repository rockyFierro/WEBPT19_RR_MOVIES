 import React from 'react';
 import { Link, Route } from "react-router-dom";
 import { useParams } from "react-router-dom";
const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link key={movie.id} to={`/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
      <div className="movie-card">
        <h2>{title.toString()}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
  );
}

export default MovieList;
