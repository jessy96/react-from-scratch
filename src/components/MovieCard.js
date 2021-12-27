import "./MovieCard.css";
import React, {useEffect, useRef, useState, Suspense} from "react";
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { turnOnMovieInfo } from "../store/movie/movieActions";
import { useContextMenu } from "../utils/hooks";

const ContextMenu = React.lazy(()=> import("./ContextMenu"));

const  MovieCard = function({movie, title, release_date}){
    const [showContextMenu, toggleContextMenu, anchorPoint, contextMenuElementRef] = useContextMenu()

    return (
        <>
            <div className="movie-card" ref={contextMenuElementRef} onClick={()=>props.turnOnMovieInfo(movie)}>
                <img src={movie.poster_path} 
                    onError={(e)=>{
                        e.target.onerror = null; 
                        e.target.src=require(`../static/images/movies/default.png`)
                    }}
                />
                <div className="movie-card-info">
                    <div className="movie-card-name">{title}</div>
                    <div className="movie-card-genres">
                        {movie.genres.slice(0, 3).join(", ")}
                    </div>
                    <div className="movie-card-year">{release_date.substring(0, 4)}</div>
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
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
};

MovieCard.defaultProps = {
    movie: {},
    title: "Best Movie",
    release_date: "2000",
    genres: []
}


const mapDispatchToProps = dispatch => {
    return {
        turnOnMovieInfo: (movieInfo) => dispatch(turnOnMovieInfo(movieInfo))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(MovieCard)
