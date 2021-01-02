import React from 'react'
import '../SearchMovie/SearchMovie.css';
import Rate from '../Rate'


const SearchMovie = ({ setSearchbyName, setSearchrate, searchrate }) => {
  return (
    <div>
        <div className="search-container">
        
        <input
          type="text"
          placeholder="Type movie name to search"
          onChange={(e)=> setSearchbyName(e.target.value)}
         
        />
        <div className="rating-search">
          <Rate setSearchrate={setSearchrate} rating={searchrate} />
        </div>


        </div>
    </div>
  )
}

export default SearchMovie
