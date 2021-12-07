import "./MovieCard.css";
import React from "react";
import PropTypes from "prop-types";

const  MovieCard = ({movie}) => (
    <div className="movie-card">
        <img src={require(`../static/images/movies/${movie.icon}`)}/>
        <div className="movie-card-info">
            <div className="movie-card-name">{movie.name}</div>
            <div className="movie-card-genres">
                {movie.genres.map(genre=>genre.name).join(", ")}
            </div>
            <div className="movie-card-year">{movie.year}</div>
        </div>
    </div>
)

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieCard;
