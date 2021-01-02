import React from 'react';
import '../MovieCard/MovieCard.css';
import Rate from '../Rate'
import {Link} from 'react-router-dom';


const MovieCard =({movie : {id,image,name,date,type,rating,description}})=>{
    return(
      <Link className="card-link" to={`film/${id}`}>
        <div className="card">
      <div className="card_left">
        <img src={image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{date}</li>
            <li>||</li>
            <li>{type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={rating}/>
           <p>{rating}</p>{/*i lefted to see the number is as same as the stars */}
        </div>
        <div className="card_right__review">
          <p>{description}</p>
          
        </div>
        <div className="card_right__button">
          
        </div>
      </div>
    </div>
    </Link>

    );
};
export default MovieCard;