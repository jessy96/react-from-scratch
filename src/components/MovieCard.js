import "./MovieCard.css";
import React, {useEffect, useRef, useState, Suspense} from "react";
import PropTypes from "prop-types";

const ContextMenu = React.lazy(()=> import("./ContextMenu"));


const  MovieCard = function(props){
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [showContextMenu, setShowContextMenu] = useState(false);

    const closeContextMenu = ()=>{
        setShowContextMenu(false)
    }

    const movie = props.movie;

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
            <div className="movie-card" ref={innerRef}>
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
