import { setupCreateReducer } from '@nealfennimore/redux-reducer-injector';
import ui from './ui';

const createReducer =  setupCreateReducer( {
    ui
} );

export default createReducer;
