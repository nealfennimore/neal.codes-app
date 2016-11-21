import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';
import Routes from 'routes';

const reduxDevtoolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = process.env.NODE_ENV === 'development' && reduxDevtoolsCompose ? reduxDevtoolsCompose : compose;

// Grab the state from a global injected into server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(thunk)
));

syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Routes store={store} />
    </Provider>,
    document.getElementById('app')
);
