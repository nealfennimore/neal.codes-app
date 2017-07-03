import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import has from 'lodash/has';
import set from 'lodash/set';

import blog from 'reducers/blog';

const defaultReducers = {
    routing: routerReducer,
    blog
};

export default function createReducer(asyncReducer={}){
    return combineReducers({
        ...defaultReducers,
        ...asyncReducer
    });
}

export function injectReducer(key, reducer){
    if(has(this.injectedReducers, key)){ return; }
    set(this.injectedReducers, key, reducer);
    this.replaceReducer(createReducer(this.injectedReducers));
}

export function addReducerHelpers(store, initialReducers){
    store.injectedReducers = initialReducers;
    store.injectReducer    = injectReducer.bind(store);
}
