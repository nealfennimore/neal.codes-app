import { createStore, applyMiddleware } from 'redux';
import { END } from 'redux-saga';
import middleware, { composeEnhancers, sagaMiddleware } from 'client/middleware';
import reducers from 'reducers';

export default function configureStore(initialState={}) {
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}