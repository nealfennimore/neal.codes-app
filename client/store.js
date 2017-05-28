import {createStore, applyMiddleware, combineReducers} from 'redux';
import {END} from 'redux-saga';
import middleware, {composeEnhancers, sagaMiddleware} from 'client/middleware';
import reducers from 'reducers';

let __store;
export function getStore(){
    return __store;
}

function setStore(store){
    __store = store;
}

function replaceReducers(defaultReducers) {
    const merged = Object.assign({}, defaultReducers, this.asyncReducers);
    const combined = combineReducers(merged);
    this.replaceReducer(combined);
}

function injectAsyncReducers(asyncReducers) {
    const injectReducers = Object.keys(asyncReducers).reduce((all, item) => {
        if (this.asyncReducers[item]) {
            delete all[item];
        }

        return all;
    }, asyncReducers);

    this.asyncReducers = Object.assign({}, this.asyncReducers, injectReducers);
    replaceReducers.call(this, reducers);
};

export default function configureStore(initialState={}, options={} ) {
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );

    store.asyncReducers = {};
    store.injectAsyncReducers = injectAsyncReducers.bind(store);

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    if(!options.isServer){
        setStore(store);
    }

    return store;
}
