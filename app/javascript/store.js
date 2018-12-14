import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const middleware = [thunk];

var reducer = combineReducers({
})

var initialState = {
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
export default createStoreWithMiddleware(reducer, initialState)
