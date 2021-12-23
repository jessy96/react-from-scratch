import axios from 'axios'
import { 
    MOVIES_REQUEST_FAILURE, 
    FETCH_MOVIES_REQUEST, 
    FETCH_MOVIES_SUCCESS, 
    TURN_OFF_MOVIE_INFO,
    TURN_ON_MOVIE_INFO
} from './movieTypes'

export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}

export const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

export const movieRequestFailure = (error) => {
    return {
        type: MOVIES_REQUEST_FAILURE,
        payload: error
    }
}

export const turnOffMovieInfo = () => {
    return {
        type: TURN_OFF_MOVIE_INFO
    }
}

export const turnOnMovieInfo = (movieInfo) => {
    return {
        type: TURN_ON_MOVIE_INFO,
        payload: movieInfo

    }
}

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest())
        axios
            .get("http://localhost:4000/movies?sortBy=id&sortOrder=desc&offset=0&limit=6")
            .then(response => {
                const movies = response.data.data
                dispatch(fetchMoviesSuccess(movies))
            })
            .catch(error => {
                dispatch(movieRequestFailure(error.message))
            })
    }
}

export const deleteMovie = (id) => {
    return dispatch => {
        axios
            .delete(`http://localhost:4000/movies/${id}`)
            .then(()=>{
                dispatch(fetchMovies())
            })
            .catch(error => {
                dispatch(movieRequestFailure(error.message))
            })
    }
}

export const updateMovie = (movie) => {
    return dispatch => {
        axios
            .put("http://localhost:4000/movies", movie)
            .then((response) => {
                dispatch(fetchMovies())
            })
            .catch(error => {
                dispatch(movieRequestFailure(error))
            })
    }
}

export const createMovie = (movie) => {
    return dispatch => {
        console.log("about to create movie:")
        console.log(JSON.stringify(movie))
        axios
            .post("http://localhost:4000/movies", movie)
            .then(()=>{
                dispatch(fetchMovies())
            })
            .catch(error => {
                dispatch(movieRequestFailure(error))
            })
    }
}