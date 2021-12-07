import React from "react";
import { getFirstMovies } from "../services/MovieService";
import MovieCard from "../components/MovieCard";
import "./Main.css";
import ResultsFilter from "./ResultsFilter";
import ResultsSort from "./ResultsSort";

export default function Main(){
    const movies = getFirstMovies(6);
    return (
        <main>
            <div className="result">
                <ResultsFilter/>
                <ResultsSort/>
            </div>
            <div className="movies">
                {movies.map((movie =>(
                    <MovieCard key={movie.id} movie={movie}/>
                )))}
            </div>
        </main>
    )
}
