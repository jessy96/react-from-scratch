import "./ResultsSort.css";
import React, { useContext } from "react";
import MovieContext from "../services/MoviesContext";

export default function ResultsSort(){
    const contextValue = useContext(MovieContext);
    const sortMovies = (event)=>{
        contextValue.movieRepo.sort(event.target.value);
        contextValue.setMovieRepo( contextValue.movieRepo.clone());
    };

    return (
        <div className="result-sort">
            <label>SORT BY</label>
            <select onChange = {sortMovies}>
                <option>RELEASE DATE</option>
                <option>NAME</option>
            </select>
        </div>
    )
}
