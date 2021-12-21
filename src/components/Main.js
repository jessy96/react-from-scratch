import React, {useContext} from "react";
import MovieCard from "../components/MovieCard";
import MovieContext from "../services/MoviesContext";
import "./Main.css";
import ResultsFilter from "./ResultsFilter";
import ResultsSort from "./ResultsSort";

export default function Main(){
    const contextValue = useContext(MovieContext);
    const movies = contextValue.movieRepo.getFirstMovies(6);
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
