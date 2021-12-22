import axios from 'axios'
import { 
    MOVIES_REQUEST_FAILURE, 
    FETCH_MOVIES_REQUEST, 
    FETCH_MOVIES_SUCCESS 
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

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest())
        axios
            .get("http://localhost:4000/movies?offset=1&limit=6")
            .then(response => {
                const movies = response.data.data
                dispatch(fetchMoviesSuccess(movies))
            })
            .catch(error => {
                console.log(`error is ${error}`)
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
                console.log(`error is ${error}`)
                dispatch(movieRequestFailure(error.message))
            })
    }
}