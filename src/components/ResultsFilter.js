import "./ResultsFilter.css";
import React from "react";
import GenresRepo from "../services/GenreRepo";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";

export default function ResultsFilter(props){
    const genreRepo = new GenresRepo();
    const genres = genreRepo.getFirstGenres(5);
    const dispatch = useDispatch();
    const {fetchFilter}  = bindActionCreators(actionCreators, dispatch)

    const handleChangeFilter = e => {
        fetchFilter(e.target.outerText)
    }

    return (
        <div className="result-filter">
            {genres.map((genre)=>(
                <a key={genre.id} onClick={handleChangeFilter}>
                    {genre.name.toUpperCase()}
                </a>
            ))}
        </div>
    )
}
