const redux = require('redux');
const reduxLogger = require('redux-logger');

// Actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM"

function buyCake() {
    const action = {
        type: BUY_CAKE,
        info: "my first action"
    }
    return action;
}

const buyIceCream = () => ({
    type: BUY_ICE_CREAM
})

// Reducers
/* 
SINGLE REDUCER AND INITIAL STATE:
const initialState = {
    numberOfCakes: 10,
    numberOfIceCreams: 15
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        };
        case BUY_ICE_CREAM: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1
        };
        default: return state;
    }
} */

// MULTIPLE REDUCERS AND INITIAL STATES
const initialCakesState = {
    numberOfCakes: 10
}
const initialIceCreamsState = {
    numberOfIceCreams: 15
}

const cakesReducer = (state = initialCakesState, action) =>
    action.type === BUY_CAKE ? { ...state, numberOfCakes: state.numberOfCakes - 1 } : state;

const iceCreamReducer = (state = initialIceCreamsState, action) => {
    if (action.type === BUY_ICE_CREAM) return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1
    };
    else return state;
}


// Store
const { createStore, combineReducers, applyMiddleware } = redux;
const rootReducer = combineReducers({
    cake: cakesReducer,
    iceCream: iceCreamReducer
})
const logger = reduxLogger.createLogger();

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial store:", store.getState());

const unsubscribe = store.subscribe(() => {/* console.log("updated state:", store.getState() */});
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();

