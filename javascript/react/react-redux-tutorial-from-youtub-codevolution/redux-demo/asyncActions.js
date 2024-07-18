const axios = require('axios');
const redux = require('redux');
const reduxLogger = require("redux-logger");
const { thunk } = require('redux-thunk');

// Define action types
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Action Creators for each type of action
const fetchUserRequest = () => ({
    type: FETCH_USERS_REQUEST
});

const fetchUserSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
});

const fetchUserFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: error
});

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

// Asynchronous Action Creator using Redux Thunk to handle API requests
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest()); // Dispatches the initial request action to set loading state

        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // Transforming data before storing it
                const usernames = response.data.map(user => user.username);
                dispatch(fetchUserSuccess(usernames)); // Dispatches success action with user IDs
            })
            .catch(error => {
                dispatch(fetchUserFailure(error.message)); // Dispatches failure action with error message
            });
    };
};

// Setting up the Redux store with thunk and logger middleware
const { createStore, applyMiddleware } = redux;
const logger = reduxLogger.createLogger();
const store = createStore(
    reducer,
    applyMiddleware(thunk, logger) // Apply both thunk and logger middleware
);

// Dispatching the asynchronous action to fetch users
store.dispatch(fetchUsers());

