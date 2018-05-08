/* eslint-disable max-len */
import { augmentStore as augmentStoreForReducers } from '@nfen/redux-reducer-injector';
import { augmentStore as augmentStoreForSagas } from '@nfen/redux-saga-injector';
import { applyMiddleware, createStore } from 'redux';
import { isBrowser } from 'shared/env';
import createReducer from './Global/reducers';
import defaultMiddleware, { composeEnhancers, sagaMiddleware } from './middleware';

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
        initialReducers( {} ),
        initialState,
        composeEnhancers(
            applyMiddleware( ...middleware() )
        )
    );

    augmentStoreForReducers( createReducer, store );
    augmentStoreForSagas( sagaMiddleware, store );

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
        _BROWSER_STORE = store;
    }

    return store;
}
