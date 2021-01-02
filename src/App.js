import './App.css';
import React, {useState} from 'react';
import {moviesData} from './Components/MoviesData'
import MoviesList from './Components/MoviesList'
import AddMovie from './Components/AddMovie/AddMovie';
import SearchMovie from './Components/SearchMovie/SearchMovie';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MovieDescription from './Components/MovieDescription';


function App() {
const [moviesList, setMoviesList] = useState(moviesData);
const [searchbyName, setSearchbyName] = useState('');
const [searchrate, setSearchrate] = useState(1);

const addmovie =(e,newmovie)=>{
  e.preventDefault();
  setMoviesList([...moviesList, newmovie]);
}

  return (
    <Router>
    <div className="App">
      
    <Switch>
      <Route exact path="/">
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
      </Route>

      <Route exact path="/film/:userId">
        
        <MovieDescription/>

      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
