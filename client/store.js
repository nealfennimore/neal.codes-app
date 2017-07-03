import {createStore, applyMiddleware} from 'redux';
import noop from 'lodash/noop';
import {END} from 'redux-saga';
import middleware, {composeEnhancers, sagaMiddleware} from 'client/middleware';
import createReducer, { addReducerHelpers } from 'reducers';
import { isBrowser } from 'shared/env';

const defaultStore = { injectReducer: noop };

const STORE = {
    __store: defaultStore,
    get instance(){ return this.__store; },
    set instance(store){ this.__store = store; },

    create: function configureStore(initialState={}) {
        const initialReducers = createReducer();
        const store = createStore(
            initialReducers,
            initialState,
            composeEnhancers(
                applyMiddleware(...middleware)
            )
        );

        addReducerHelpers(store, initialReducers);

        store.runSaga = sagaMiddleware.run;
        store.close = () => store.dispatch(END);

        if(isBrowser){
            // We never want to memonize a server store
            this.instance = store;
        }


        return store;
    }
};

export default STORE;
