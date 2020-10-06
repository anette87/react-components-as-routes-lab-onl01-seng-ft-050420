
import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const genList = () => {
    return actors.map((actor, index) => (
      <div key={index}>
        <p>{actor.name}</p>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    ))
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {genList()}
    </div>
  );
};

export default Actors;
