import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const genreList = () => {
    return movies.map((movie, index) => (
      <div key={index}>
        <p><strong>{movie.title}</strong></p>
        <p><em>{movie.time}</em></p>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    ))
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {genreList()}
    </div>
  );
};

export default Movies;