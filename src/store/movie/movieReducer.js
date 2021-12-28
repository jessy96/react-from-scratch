import { FILTER_NONE, SORT_LATEST_PARAM } from "./movieApi";
import { 
    FETCH_MOVIES_REQUEST, 
    FETCH_MOVIES_SUCCESS,
    MOVIES_REQUEST_FAILURE,
    SET_FILTER_PARAM,
    SET_SORT_PARAMS,
    TURN_OFF_MOVIE_INFO,
    TURN_ON_MOVIE_INFO 
} from "./movieTypes";


const initialState = {
    loading: false,
    movies: [],
    movieInfo: null,
    error: '',
    sortParams: SORT_LATEST_PARAM,
    filterParam: FILTER_NONE
  }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIES_SUCCESS:
            return  {
                ...state,
                loading: false,
                movies: action.payload,
                error: ''
            }
        case MOVIES_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                movies: []
            }
        case TURN_ON_MOVIE_INFO:
            return {
                ...state,
                movieInfo: action.payload
            }
        case TURN_OFF_MOVIE_INFO:
            return {
                ...state,
                movieInfo: null
            }
        case SET_SORT_PARAMS: 
            return {
                ...state,
                sortParams: action.payload
            }
        case SET_FILTER_PARAM:
            return {
                ...state,
                filterParam: action.payload
            }
        default:
            return state;

    }
}

export default reducer;
