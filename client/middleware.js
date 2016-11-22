import { compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import {browserHistory} from 'react-router';

const isDev = process.env.NODE_ENV === 'development';

// Add in redux dev tools when in development
const reduxDevtoolsCompose = typeof window === 'object' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : false;
export const composeEnhancers = isDev && reduxDevtoolsCompose ? reduxDevtoolsCompose : compose;

const defaultMiddleware = [
    routerMiddleware(browserHistory),
    thunk
];

const middleware = isDev ? [
    require('redux-immutable-state-invariant')(),
    ...defaultMiddleware
] : defaultMiddleware;

export default middleware;