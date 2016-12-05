
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';

import middleware, { composeEnhancers } from 'client/middleware';
import reducers from 'reducers';
import Root from 'client/root';

// Grab the state from a global injected into server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middleware)
));

const history = syncHistoryWithStore(browserHistory, store);

render(
    <AppContainer
        component={Root}
        props={{ store, history }}
    />,
    document.getElementById('app')
);

if(module.hot){
    module.hot.accept('./root', ()=> {
        render(
            <AppContainer
                component={require('./root').default}
                props={{ store, history }}
            />,
            document.getElementById('app')
        );
    });
}