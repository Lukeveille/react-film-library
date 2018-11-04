import React, { Component } from 'react';
import './App.css';
import TMDB from "./TMDB.js";
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing tmdb={TMDB} />
        <FilmDetails tmdb={TMDB} />
      </div>
    );
  }
}

export default App;
