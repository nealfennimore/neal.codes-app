/* eslint-disable max-len */
import { createStore, applyMiddleware } from 'redux';
import { END } from 'redux-saga';
import { set, has } from 'lodash';
import { isBrowser } from 'shared/env';
import defaultMiddleware, { composeEnhancers, sagaMiddleware } from './middleware';
import createReducer from './reducers';

/**
 * Close redux sagas
 */
function close() {
    this.dispatch( END );
}

/**
 * Inject a reducer into a store
 *
 * @param {String,Function} { key, reducer }
 */
function injectReducer( { key, reducer } ) {
    if ( ! has( this.injectedReducers, key ) ) {
        set( this.injectedReducers, key, reducer );
        this.replaceReducer( createReducer( this.injectedReducers ) );
    }
}

/**
 * StoreFactory
 * Creates a new Store instance
 *
 * @export
 * @param {any} args
 * @returns
 */
export function StoreFactory(
    initialState = {},
    initialReducers = createReducer,
    middleware = defaultMiddleware,
) {
    const store = createStore(
        initialReducers(),
        initialState,
        composeEnhancers(
            applyMiddleware( ...middleware() )
        )
    );

    // Sagas
    store.runSaga = sagaMiddleware.run;
    store.close = close.bind( store );

    // Async reducers
    store.injectedReducers = {};
    store.injectReducer = injectReducer.bind( store );

    return store;
}

/**
 * Store for the browser -
 * Cached in order to not recreate.
 * Server store needs to be recreated on every request.
 */
let _BROWSER_STORE;

/**
 * Create Store instance or use browser cached
 * if already created
 *
 * @export
 * @param {any} args
 * @returns Store Instance
 */
export default function configureStore( ...args ) {
    const store = _BROWSER_STORE || StoreFactory( ...args );

    if ( isBrowser ) {
        console.log( 'im cached' );
        _BROWSER_STORE = store;
    }

    return store;
}
