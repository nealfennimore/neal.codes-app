/* eslint-disable max-len */
import { compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { isDevelopment, isBrowser } from 'shared/env';

// Add in redux dev tools when in development
const reduxDevtoolsCompose    = isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const composeEnhancers = isDevelopment && reduxDevtoolsCompose ? reduxDevtoolsCompose : compose;

export const sagaMiddleware = createSagaMiddleware();

const createMiddleware = () => [
    sagaMiddleware
];

export default createMiddleware;
