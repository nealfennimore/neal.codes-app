import {createStore, applyMiddleware, combineReducers} from 'redux';
import noop from 'lodash/noop';
import {END} from 'redux-saga';
import middleware, {composeEnhancers, sagaMiddleware} from 'client/middleware';
import createReducer from 'reducers';
import { isBrowser } from 'shared/env';

const STORE = {
    __store: { injectAsyncReducers: noop },
    get instance(){ return this.__store; },
    set instance(store){ this.__store = store; },

    create: function configureStore(initialState={}, options={} ) {
        const store = createStore(
            createReducer(),
            initialState,
            composeEnhancers(
                applyMiddleware(...middleware)
            )
        );

        store.asyncReducers = {};
        store.injectAsyncReducers = (asyncReducers)=> store.replaceReducer(createReducer(asyncReducers));

        store.runSaga = sagaMiddleware.run;
        store.close = () => store.dispatch(END);

        if(isBrowser){
            // We never want to memonize a server store
            this.instance = store;
        }

        return store;
    }
}

export default STORE;