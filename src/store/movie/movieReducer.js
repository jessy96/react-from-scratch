import { 
    FETCH_MOVIES_REQUEST, 
    FETCH_MOVIES_SUCCESS,
    MOVIES_REQUEST_FAILURE 
} from "./movieTypes";


const initialState = {
    loading: false,
    movies: [],
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
        case "ADD_MOVIE": 
            // state.push(action.payload);
            console.log("adding movie");
            return state;
        case "DELETE_MOVIE":
            console.log("deleting movie");
            console.log(action.payload)
            return state;
        case "EDIT_MOVIE":
            console.log("edititng movie");
            return state;
        default:
            return state;

    }
}

export default reducer;
