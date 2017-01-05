import { combineReducers } from 'redux';

import projects from './projects';
import modal from './modal';

export default combineReducers({
    projects,
    modal
});