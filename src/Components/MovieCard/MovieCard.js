import React from 'react';
import '../MovieCard/MovieCard.css';
import Rate from '../Rate'


const MovieCard =({movie : {image,name,date,type,rating,description}})=>{
    return(
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

    );
};
export default MovieCard;