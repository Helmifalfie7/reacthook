import './App.css';
import React, {useState} from 'react';
import {moviesData} from './Components/MoviesData'
import MoviesList from './Components/MoviesList'
import AddMovie from './Components/AddMovie/AddMovie';
import SearchMovie from './Components/SearchMovie/SearchMovie';

function App() {
const [moviesList, setMoviesList] = useState(moviesData);
const [searchbyName, setSearchbyName] = useState('');
const [searchrate, setSearchrate] = useState(1);

const addmovie =(newmovie)=>{
  setMoviesList([...moviesList, newmovie]);
}



  return (
    <div className="App">
      <SearchMovie 
      setSearchbyName={setSearchbyName} 
      searchrate={searchrate}
      setSearchrate={setSearchrate}
      />
      <MoviesList 
      moviesList={moviesList} 
      searchbyName={searchbyName}
      searchrate={searchrate}
      />
      <AddMovie addmovie={addmovie} />
    </div>
  );
}

export default App;
