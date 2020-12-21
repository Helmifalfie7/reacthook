import React from "react";
import MovieCard from "./MovieCard/MovieCard";

const MoviesList = ({ moviesList,searchbyName,searchrate })=>{
    return(
        <div className='moviesList'>
            {moviesList
            .filter(
                (el) =>
            el.name.toLowerCase().includes(searchbyName.toLowerCase().trim())//searching by name before mapping the list
            && 
            el.rating >= searchrate
            ) 
            .map((movie, i)=>
            <MovieCard key={i} movie={movie}/>
            )}
        </div>

    );
};
export default MoviesList