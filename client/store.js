import {createStore, applyMiddleware} from 'redux';
import noop from 'lodash/noop';
import {END} from 'redux-saga';
import middleware, {composeEnhancers, sagaMiddleware} from 'client/middleware';
import createReducer from 'reducers';

const defaultStore = { injectAsyncReducers: noop };

const STORE = {
    __store: defaultStore,
    get instance(){ return this.__store; },
    set instance(store){ this.__store = store; },

    create: function configureStore(initialState={}) {
        const store = createStore(
            createReducer(),
            initialState,
            composeEnhancers(
                applyMiddleware(...middleware)
            )
        );

        store.injectAsyncReducers = (asyncReducers)=> store.replaceReducer(createReducer(asyncReducers));

        store.runSaga = sagaMiddleware.run;
        store.close = () => store.dispatch(END);

        // We never want to memonize a server store
        this.instance = store;

        return store;
    },

    reset(){
        this.instance = defaultStore;
    }
};

export default STORE;
