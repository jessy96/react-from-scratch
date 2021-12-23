import { 
    FETCH_MOVIES_REQUEST, 
    FETCH_MOVIES_SUCCESS,
    MOVIES_REQUEST_FAILURE,
    TURN_OFF_MOVIE_INFO,
    TURN_ON_MOVIE_INFO 
} from "./movieTypes";


const initialState = {
    loading: false,
    movies: [],
    movieInfo: null,
    error: ''
  }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            console.log(FETCH_MOVIES_REQUEST)
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIES_SUCCESS:
            console.log(FETCH_MOVIES_SUCCESS)
            return  {
                loading: false,
                movies: action.payload,
                error: ''
            }
        case MOVIES_REQUEST_FAILURE:
            console.log(MOVIES_REQUEST_FAILURE)
            return {
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
        default:
            return state;

    }
}

export default reducer;
