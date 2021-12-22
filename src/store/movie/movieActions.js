import axios from 'axios'
import { 
    FETCH_MOVIES_FAILURE, 
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

export const fetchMoviesFailer = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,
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
                dispatch(fetchMoviesFailer(error.message))
            })
    }
}
