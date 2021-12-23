import "./styles.css";
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ErrorBoundary from "./ErrorBoundary";
import HeaderMovieInfo from "./HeaderMovieInfo";
import { useSelector } from "react-redux";

export default function App() {
    const movieInfo = useSelector(state => state.movie.movieInfo)

    return ( 
        <>
            { movieInfo == null ? <Header/> : <HeaderMovieInfo/> }
            <ErrorBoundary>
                <Main/>
            </ErrorBoundary>
            <Footer/>
        </>
    )
}
