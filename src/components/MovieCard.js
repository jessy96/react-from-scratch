import "./MovieCard.css";
import React, {useEffect, useRef, useState, Suspense, useContext} from "react";
import PropTypes from "prop-types";
import MovieContext from "../services/MoviesContext";
import { useContextMenu, useModal } from "../utils/hooks";

const ContextMenu = React.lazy(()=> import("./ContextMenu"));

const  MovieCard = function(props){
    const contextValue = useContext(MovieContext);
    const [showContextMenu, toggleContextMenu, anchorPoint] = useContextMenu()

    const movie = props.movie;
    if(movie === undefined){
        movie = {};
    }
    if(movie.name === undefined){
        movie.name = "Best Movie";
    }
    if(movie.year === undefined){
        movie.year = 2000;
    }
    if(movie.icon === undefined){
        movie.icon = "default.png";
    }
    if(movie.genres === undefined){
        movie.genres = {}
    }

    return (
        <>
            <div className="movie-card" ref={innerRef} onClick={()=>contextValue.setMovieInfo(movie)}>
                <img src={require(`../static/images/movies/${movie.icon}`)}/>
                <div className="movie-card-info">
                    <div className="movie-card-name">{movie.name}</div>
                    <div className="movie-card-genres">
                        {movie.genres.map(genre=>genre.name).join(", ")}
                    </div>
                    <div className="movie-card-year">{movie.year}</div>
                </div>
            </div>
            <Suspense fallback={<div className="error">Loading...</div>}>
                <ContextMenu show={showContextMenu} 
                    handleClose={toggleContextMenu} 
                    anchorPoint={anchorPoint}
                    movie={movie}/>
            </Suspense>
        </>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieCard;
