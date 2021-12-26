import "./DeleteMovieModal.css";
import React, { useContext } from "react";
import MovieContext from "../services/MoviesContext";

export default function DeleteMovieModal({handleClose, movie}){
    const {movieRepo, setMovieRepo} = useContext(MovieContext);
    const deleteMovie = ()=>{
        movieRepo.deleteMovie(movie);
        setMovieRepo(movieRepo.clone());
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