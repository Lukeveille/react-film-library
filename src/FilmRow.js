import React from 'react';
import FilmPoster from './FilmPoster'

function FilmRow(props) {
  return (
    <div className="film-row">
      <figure className="film-poster">
        <FilmPoster film={props.film} />
      </figure>

      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{props.film.release_date.slice(0, 4)}</p>
      </div>
    </div>
  );
}

export default FilmRow;