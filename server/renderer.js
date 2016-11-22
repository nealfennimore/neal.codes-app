import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import thunk from 'redux-thunk';

import get from 'lodash/get';
import last from 'lodash/last';

import reducers from 'reducers';
import page from 'server/templates/page';
import middleware, { composeEnhancers } from 'client/middleware';

// Create a new Redux store instance
const store = createStore(
    reducers,
    {},
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

function fetchData({components}){
    const defaultPromise = ()=> Promise.resolve();
    return get(last(components), 'WrappedComponent.fetchData', defaultPromise);
}

export default function handleRender({res, renderProps, next}) {
    // Fetch data server-side if we need to
    fetchData(renderProps)({store})
        .then(()=> {
            // Render the component to a string
            const content = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );

            // Grab the initial state from our Redux store
            const initialState = store.getState();

            // Send the rendered page back to the client
            res.send(
                page({
                    content,
                    initialState
                })
            );
        })
        .catch(err => next(err));
}