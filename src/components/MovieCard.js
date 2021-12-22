import "./MovieCard.css";
import React, {useEffect, useRef, useState, Suspense, useContext} from "react";
import PropTypes from "prop-types";
import MovieContext from "../services/MoviesContext";

const ContextMenu = React.lazy(()=> import("./ContextMenu"));

const  MovieCard = function(props){
    const contextValue = useContext(MovieContext);
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [showContextMenu, setShowContextMenu] = useState(false);

    const closeContextMenu = ()=>{
        setShowContextMenu(false)
    }

    const movie = props.movie;
    if(movie === undefined){
        movie = {};
    }
    if(movie.title === undefined){
        movie.title = "Best Movie";
    }
    if(movie.year === undefined){
        movie.year = 2000;
    }
    if(movie.poster_path === undefined){
        movie.poster_path = require(`../static/images/movies/default.png`);
    }
    if(movie.genres === undefined){
        movie.genres = []
    }

    const innerRef = useRef(null);
    useEffect(() => {
        function handleContextMenu(event) {
            event.preventDefault();
            setAnchorPoint({ x: event.pageX, y: event.pageY });
            setShowContextMenu(true);
        }
        const div = innerRef.current;
        div.addEventListener("contextmenu", handleContextMenu);    
        return () => {
          div.removeEventListener('contextmenu', handleContextMenu);
        };
      }, []);

    return (
        <>
            <div className="movie-card" ref={innerRef} onClick={()=>contextValue.setMovieInfo(movie)}>
                <img src={movie.poster_path} 
                    onError={(e)=>{
                        e.target.onerror = null; 
                        e.target.src=require(`../static/images/movies/default.png`)
                    }}
                />
                <div className="movie-card-info">
                    <div className="movie-card-name">{movie.title}</div>
                    <div className="movie-card-genres">
                        {movie.genres.join(", ")}
                    </div>
                    <div className="movie-card-year">{movie.year}</div>
                </div>
            </div>
            <Suspense fallback={<div className="error">Loading...</div>}>
                <ContextMenu show={showContextMenu} 
                    handleClose={closeContextMenu} 
                    anchorPoint={anchorPoint}
                    movie={movie}
                    />
            </Suspense>
        </>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieCard;
