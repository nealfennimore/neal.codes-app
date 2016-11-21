import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

import Routes from 'routes';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Grab the state from a global injected into server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducers, preloadedState);

syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Routes store={store} />
    </Provider>,
    document.getElementById('app')
);
