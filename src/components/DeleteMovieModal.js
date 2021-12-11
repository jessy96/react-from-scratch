import "./DeleteMovieModal.css";
import React, { useContext } from "react";
import MovieContext from "../services/MoviesContext";

export default function DeleteMovieModal({handleClose, movie}){
    const contextValue = useContext(MovieContext);
    const deleteMovie = ()=>{
        contextValue.movieRepo.deleteMovie(movie);
        contextValue.setMovieRepo(contextValue.movieRepo.clone());
        handleClose();
    }
    return (
        <div className="delete-movie-modal">
            <h1>DELETE MOVIE</h1>
            <p>Are you sure you want to delete this movie?</p>
            <button onClick={deleteMovie}>CONFIRM</button>
        </div>
    );
}