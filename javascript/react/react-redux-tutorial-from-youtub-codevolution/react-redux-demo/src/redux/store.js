import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { thunk } from 'redux-thunk';
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./ice_cream/iceCreamReducer";

import userReducer from "./user/userReducers";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
});

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;