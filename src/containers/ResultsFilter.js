import "./ResultsFilter.css";
import React from "react";
import GenresRepo from "../services/GenreRepo";

export default function ResultsFilter(props){
    const genreRepo = new GenresRepo();
    const genres = genreRepo.getFirstGenres(5);
    return (
        <div className="result-filter">
            {genres.map((genre)=>(
                <a key={genre.id} href="#">
                    {genre.name.toUpperCase()}
                </a>
            ))}
        </div>
    )
}
