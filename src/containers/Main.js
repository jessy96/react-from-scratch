import React, {useContext} from "react";
import MovieCard from "../components/MovieCard";
import MovieContext from "../services/MoviesContext";
import "./Main.css";
import ResultsFilter from "./ResultsFilter";
import ResultsSort from "./ResultsSort";

export default function Main(){
    const {movieRepo} = useContext(MovieContext);
    const movies = movieRepo.getFirstMovies(6);
    return (
            <main>
                <div className="result">
                    <ResultsFilter/>
                    <ResultsSort/>
                </div>
                <div className="movies">
                    {movies.map((movie =>(
                        <MovieCard key={movie.id} 
                            movie={movie}
                            name={movie.name}
                            year={movie.year}
                            icon={movie.icon}
                            genres={movie.genres}/>
                    )))}
                </div>
            </main>
    )
}
