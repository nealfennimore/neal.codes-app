import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';

import middleware, { composeEnhancers } from './middleware';
import reducers from 'reducers';
import Routes from 'routes';

// Grab the state from a global injected into server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middleware)
));

syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Routes store={store} />
    </Provider>,
    document.getElementById('app')
);
