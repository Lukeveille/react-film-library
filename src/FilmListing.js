import React from 'react';
import FilmRow from './FilmRow.js';

function FilmListing(props) {
  var filmList = props.tmdb.films.map(function(film) {
    return <FilmRow film={film} key={film.id} />
  });
  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <ul>
        {filmList}
      </ul>
    </div>
  )
}

export default FilmListing;