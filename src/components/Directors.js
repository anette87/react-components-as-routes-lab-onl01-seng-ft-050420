
import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const genreList = () => {
    return directors.map((director,index) => (
      <div key={index}>
        <p>{director.name}</p>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    ))
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {genreList()}
    </div>
  );
}

export default Directors