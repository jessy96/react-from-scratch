import "./DeleteMovieModal.css";
import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from "../store/index"

export default function DeleteMovieModal({handleClose, movie}){
    // const movieState = useSelector((state)=>state.movieState);
    const dispatch = useDispatch();
    const { deleteMovie } = bindActionCreators(actionCreators, dispatch);
    
    const handleDelete = ()=> {
        deleteMovie(movie.id);
        handleClose();
    }
    return (
        <div className="delete-movie-modal">
            <h1>DELETE MOVIE</h1>
            <p>Are you sure you want to delete this movie?</p>
            <button onClick={handleDelete}>CONFIRM</button>
        </div>
    );
}