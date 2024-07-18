import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './userTypes';

// Initial state of the store
const initialState = {
    isLoading: false,
    users: [],
    error: ""
}

// Reducer function to handle actions
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.payload,
                error: ""
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                users: [] // Clear users data on failure
            };
        default:
            return state;
    }
}

export default reducer;