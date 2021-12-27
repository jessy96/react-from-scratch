import "./HeaderMovieInfo.css";
import 'font-awesome/css/font-awesome.min.css';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";

export default function HeaderMovieInfo () {

    const dispatch = useDispatch()
    const {turnOffMovieInfo} = bindActionCreators(actionCreators, dispatch)
    const movie = useSelector(state => state.movie.movieInfo)
    return <header className="movie-info-header">
        <div className="movie-info-control">
            <div className="movie-info-logo"><b>netflix</b>roulette</div>
            <i className="fa fa-search movie-info-search-icon" onClick={()=>turnOffMovieInfo()}></i>
        </div>
        <div className="movie-info">
            <div className="movie-info-icon">
                <img 
                    src={movie.poster_path} 
                    onError={(e)=>{
                        e.target.onerror = null; 
                        e.target.src=require(`../static/images/movies/default.png`)
                    }}
                />
            </div>
            <div className="movie-info-details">
                <div className="movie-info-row">
                    <div className="movie-info-name">
                        {movie.title == null ? "Best Movie": movie.title}
                    </div>
                    <div className="movie-info-rating">
                        {movie.vote_average == null ? 10 : movie.vote_average}
                    </div>
                </div>

                <div className="movie-info-genres">
                    {movie.genres.join(", ")}
                </div>
                <div className="movie-info-row">
                    <div className="movie-info-year">
                        {movie.release_date ? movie.release_date.substring(0, 4) : null}
                    </div>
                    <div className="movie-info-runtime">
                        {movie.runtime == null ? 0 : movie.runtime} min
                    </div>
                </div>
                <div className="movie-info-overview">
                    {
                        movie.overview != null ? movie.overview : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    }
                </div>
            </div>
        </div>
    </header>
}