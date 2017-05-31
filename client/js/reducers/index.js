import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import blog from 'reducers/blog';

export default function createReducer(asyncReducer={}){
    return combineReducers({
        blog,
        routing: routerReducer,
        ...asyncReducer
    });
}