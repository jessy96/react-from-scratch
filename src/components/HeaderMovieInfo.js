import "./HeaderMovieInfo.css";
import 'font-awesome/css/font-awesome.min.css';
import React, {useContext} from "react";
import MovieContext from "../services/MoviesContext";

export default function HeaderMovieInfo(){
    const contextValue = useContext(MovieContext);
    const movie = contextValue.movieInfo;
    return <header className="movie-info-header">
        <div className="movie-info-control">
            <div className="movie-info-logo"><b>netflix</b>roulette</div>
            <i className="fa fa-search movie-info-search-icon" onClick={()=>contextValue.setMovieInfo(null)}></i>
        </div>
        <div className="movie-info">
            <div className="movie-info-icon">
                <img src={require(`../static/images/movies/${movie.icon}`)}/>
            </div>
            <div className="movie-info-details">
                <div className="movie-info-row">
                    <div className="movie-info-name">
                        {movie.name == null ? "Best Movie": movie.name}
                    </div>
                    <div className="movie-info-rating">
                        {movie.rating == null ? 10 : movie.rating}
                    </div>
                </div>

                <div className="movie-info-genres">
                    {movie.genres.map(genre=>genre.name).join(", ")}
                </div>
                <div className="movie-info-row">
                    <div className="movie-info-year">{movie.year}</div>
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