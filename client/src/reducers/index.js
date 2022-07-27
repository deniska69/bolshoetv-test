import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import moviesReducer from "./moviesReducer";
import visitorReducer from "./visitorReducer";

const rootReducer = combineReducers({
    movies: moviesReducer,
    visitor: visitorReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
