import {createStore, applyMiddleware, combineReducers} from 'redux';
import {END} from 'redux-saga';
import middleware, {composeEnhancers, sagaMiddleware} from 'client/middleware';
import reducers from 'reducers';

function replaceReducers(defaultReducers) {
    const merged = Object.assign({}, defaultReducers, this.asyncReducers);
    const combined = combineReducers(merged);
    this.replaceReducer(combined);
}

export default function configureStore(initialState = {}) {
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );

    store.asyncReducers = {};
    store.injectAsyncReducers = function injectAsyncReducers(asyncReducers) {
        const injectReducers = Object.keys(asyncReducers).reduce((all, item) => {
            if (store.asyncReducers[item]) {
                delete all[item];
            }

            return all;
        }, asyncReducers);

        store.asyncReducers = Object.assign({}, store.asyncReducers, injectReducers);
        replaceReducers.call(store, reducers);
    };

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}
