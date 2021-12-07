import "./ResultsFilter.css";
import React from "react";
import { getFirstGenres } from "../services/GenreService";

export default function ResultsFilter(props){
    const genres = getFirstGenres(5);
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
