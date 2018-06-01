import { setupCreateReducer } from '@nfen/redux-reducer-injector';
import ui from './ui';

const createReducer = setupCreateReducer( {
    ui
} );

export default createReducer;
