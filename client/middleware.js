import { compose } from 'redux';
import thunk from 'redux-thunk';

const isDev = process.env.NODE_ENV === 'development';

// Add in redux dev tools when in development
const reduxDevtoolsCompose = typeof window === 'object' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : false;
export const composeEnhancers = isDev && reduxDevtoolsCompose ? reduxDevtoolsCompose : compose;

const middleware = isDev ? [require('redux-immutable-state-invariant')(), thunk] : [thunk];
export default middleware;