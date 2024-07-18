import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS
} from './userTypes';
import axios from "axios";

// Action Creators for each type of action
export const fetchUserRequest = () => ({
    type: FETCH_USERS_REQUEST
});

export const fetchUserSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUserFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: error
});


// Asynchronous Action Creator using Redux Thunk to handle API requests
export const fetchUsers = () => {
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
