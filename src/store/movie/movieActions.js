import axios from 'axios'
import { MOVIE_BASE_URL, SORT_DATE_PARAM, SORT_LATEST_PARAM, SORT_RATING_PARAM, SORT_TITLE_PARAM } from './movieApi'
import { 
    MOVIES_REQUEST_FAILURE, 
    FETCH_MOVIES_REQUEST, 
    FETCH_MOVIES_SUCCESS, 
    TURN_OFF_MOVIE_INFO,
    TURN_ON_MOVIE_INFO,
    SET_SORT_PARAMS,
    SET_FILTER_PARAM
} from './movieTypes'

import { 
    FILTER_COMEDY_PARAM, 
    FILTER_CRIME_PARAM, 
    FILTER_DOCUMENTARY_PARAM, 
    FILTER_HORROR_PARAM, 
    FILTER_NONE 
} from "./movieApi";


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
    return (dispatch, getState) => {
        dispatch(fetchMoviesRequest())
        axios
            .get(`${MOVIE_BASE_URL}${getState().movie.sortParams}${getState().movie.filterParam}`)
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
            .delete(`${MOVIE_BASE_URL}/${id}`)
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
        if (movie.tagline == null || movie.tagline === '') {
            movie.tagline = "default"
        }
        axios
            .put(MOVIE_BASE_URL, movie)
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
        axios
            .post(MOVIE_BASE_URL, movie)
            .then(()=>{
                dispatch(fetchMovies())
            })
            .catch(error => {
                dispatch(movieRequestFailure(error))
            })
    }
}

export const setSortParam = sortParams => {
    return {
        type: SET_SORT_PARAMS,
        payload: sortParams
    }
}

export const fetchSort = sortText => {
    return dispatch => {
        const updateWithSort = sortParams => {
            dispatch(setSortParam(sortParams))
                dispatch(fetchMovies())
        }
        switch (sortText) {
            case 'NAME':
                updateWithSort(SORT_TITLE_PARAM)
                return
            case 'RELEASE DATE':
                updateWithSort(SORT_DATE_PARAM)
                return
            case 'RATING':
                updateWithSort(SORT_RATING_PARAM)
                return
            default:
                updateWithSort(SORT_LATEST_PARAM)
                return
        }
    }
}

export const setFilterParam = filterParam => {
    return {
        type: SET_FILTER_PARAM,
        payload: filterParam
    }
}

export const fetchFilter = filterText => {
    return dispatch => {
        const setFilterAndFetch = filter => {
            dispatch(setFilterParam(filter))
            dispatch(fetchMovies())

        }
        switch(filterText){
            case 'DOCUMENTARY':
                setFilterAndFetch(FILTER_DOCUMENTARY_PARAM)
                return
            case 'COMEDY':
                setFilterAndFetch(FILTER_COMEDY_PARAM)
                return
            case 'CRIME':
                setFilterAndFetch(FILTER_CRIME_PARAM)
                return
            case 'HORROR':
                setFilterAndFetch(FILTER_HORROR_PARAM)
                return
            default:
                setFilterAndFetch(FILTER_NONE)
                return        
        }
        
    }
}