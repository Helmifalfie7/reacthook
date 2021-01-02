import React from 'react'
import {Link, Redirect, useParams} from 'react-router-dom';
import {moviesData} from './MoviesData'


function MovieDescription() {

    const {userId}=useParams();

    return(
        <div className="card2">
            <div className="card-desc">
                <h1>{moviesData.find(user=>user.id===Number(userId)).name}</h1>
                <p>{moviesData.find(user=>user.id===Number(userId)).description}</p>
                <Link to='/'><button type="button" className="btn">Back to Home</button></Link>
                <button className="btn"><a className="btn-link" href={moviesData.find(user=>user.id===Number(userId)).trailer}>Trailer</a></button>
            </div>
            <img className="img-card" src={moviesData.find(user=>user.id===Number(userId)).image}></img>
        </div>

    )
}
export default MovieDescription