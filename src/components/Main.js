import React, {useEffect} from "react";
import { connect } from 'react-redux'
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../store/movie/movieActions";
import "./Main.css";
import ResultsFilter from "./ResultsFilter";
import ResultsSort from "./ResultsSort";


function Main({movieData, fetchMovies}){
    useEffect(() => {
        fetchMovies()
    }, [])
    return (
        <main>
            <div className="result">
                <ResultsFilter/>
                <ResultsSort/>
            </div>
            <div className="movies">
                {
                    movieData.loading ? (<h2>Loading</h2>):
                    movieData.error ? (<h2>{movieData.error}</h2>):
                    movieData.movies.map(
                        movie => (
                            <MovieCard key={movie.id} movie={movie}/>
                        )
                    )
                }
            </div>
        </main>
    )
}

const mapStateToProps = state => {
    return {
      movieData: state.movie
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchMovies: () => dispatch(fetchMovies())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
