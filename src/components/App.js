import "./styles.css";
import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ErrorBoundary from "./ErrorBoundary";
import MovieContext, { MovieRepo } from "../services/MoviesContext";
import HeaderMovieInfo from "./HeaderMovieInfo";

export default function App() {
    const [movieRepo, setMovieRepo] = useState(new MovieRepo());
    const [movieInfo, setMovieInfo] = useState(null);
    const movieContext = {movieRepo, setMovieRepo, movieInfo, setMovieInfo};
    return ( 
        <MovieContext.Provider value={movieContext}>
            { movieInfo == null ? <Header/> : <HeaderMovieInfo/> }
            <ErrorBoundary>
                <Main/>
            </ErrorBoundary>
            <Footer/>
        </MovieContext.Provider>
    )
}
