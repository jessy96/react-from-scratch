import "./MovieCard.css";
import React, {Suspense, useContext} from "react";
import PropTypes from "prop-types";
import MovieContext from "../services/MoviesContext";
import { useContextMenu } from "../utils/hooks";

const ContextMenu = React.lazy(()=> import("./ContextMenu"));

const  MovieCard = function({movie, name, icon, year, genres}){
    const contextValue = useContext(MovieContext);
    const [showContextMenu, toggleContextMenu, anchorPoint, innerRef] = useContextMenu()

    return (
        <>
            <div className="movie-card" ref={innerRef} onClick={()=>contextValue.setMovieInfo(movie)}>
                <img src={require(`../static/images/movies/${icon}`)}/>
                <div className="movie-card-info">
                    <div className="movie-card-name">{name}</div>
                    <div className="movie-card-genres">
                        {genres.map(genre=>genre.name).join(", ")}
                    </div>
                    <div className="movie-card-year">{year}</div>
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
    movie: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired
};

MovieCard.defaultProps = {
    movie: {},
    name: "Best Movie",
    icon: "default.png",
    year: 2000,
    genres: []
}

export default MovieCard;
