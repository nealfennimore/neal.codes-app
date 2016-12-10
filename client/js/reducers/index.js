import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import blog from 'reducers/blog';
import projects from 'reducers/projects';

export default combineReducers({
    blog,
    projects,
    routing: routerReducer
});