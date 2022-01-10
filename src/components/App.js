import "./styles.css";
import React, {useState} from 'react';
import Header from '../containers/Header';
import Main from '../containers/Main';
import Footer from './Footer';
import ErrorBoundary from "../containers/ErrorBoundary";
import MovieContext, { MovieRepo } from "../services/MoviesContext";

export default function App() {
    const [movieRepo, setMovieRepo] = useState(new MovieRepo());
    const movieContext = {movieRepo, setMovieRepo};
    return ( 
        <MovieContext.Provider value={movieContext}>
            <Header/>
            <ErrorBoundary>
                <Main/>
            </ErrorBoundary>
            <Footer/>
        </MovieContext.Provider>
    )
}
