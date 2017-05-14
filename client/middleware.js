import { compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import {browserHistory} from 'react-router';
import createSagaMiddleware from 'redux-saga'
import { isDevelopment, isBrowser } from 'shared/env';

// Add in redux dev tools when in development
const reduxDevtoolsCompose    = isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const composeEnhancers = isDevelopment && reduxDevtoolsCompose ? reduxDevtoolsCompose : compose;

export const sagaMiddleware   = createSagaMiddleware();

const defaultMiddleware = [
    routerMiddleware(browserHistory),
    sagaMiddleware
];

const middleware = isDevelopment ? [
    require('redux-immutable-state-invariant')(),
    ...defaultMiddleware
] : defaultMiddleware;

export default middleware;