import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {testReducer} from './test';


export default function configureStore(initialState){
    const rootReducer = combineReducers({
        testReducer
    });
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    /****************/
// add thunk middle ware
    const middlewares = [
        thunk,
    ];
// ????
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));
}
